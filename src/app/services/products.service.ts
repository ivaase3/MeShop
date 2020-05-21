import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cargando = true;
  productos: Product[] = [];


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

}
