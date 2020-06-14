import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cargando = true;
  productos: Product[] = [];
  productosFiltrado: Product[] = [];


  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }


  private cargarProductos() {

    return new Promise(  ( resolve, reject ) => {

      this.http.get('https://meshop-4b04c.firebaseio.com/productos.json')
          .subscribe( (resp: Product[]) => {
            this.productos = resp;
            this.cargando = false;
            resolve();
          });
    });

  }

  getProducto( id: string ) {

    return this.http.get(`https://meshop-4b04c.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto( termino: string ) {


    if ( this.productos.length === 0 ) {
      // cargar productos
      this.cargarProductos().then( () => {
        // ejecutar después de tener los productos
        // Aplicar filtro
        this.filtrarProductos( termino );
      });
    } else {
      // aplicar el filtro
      this.filtrarProductos( termino );
    }


  }

  private filtrarProductos( termino: string ) {
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
      const tituloLower = prod.nombre.toLocaleLowerCase();
      if ( prod.categoria === termino || tituloLower.indexOf( termino ) >= 0  ) {
        this.productosFiltrado.push( prod );
      }
    });
  }
}
