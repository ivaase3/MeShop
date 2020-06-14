import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: string;
  product: Product;

  constructor( private route: ActivatedRoute, public productsService: ProductsService) { }

  ngOnInit(): void {

    this.route.params
        .subscribe( parametros => {
          //loading
          this.productsService.getProducto(parametros.id)
                .subscribe( (product: Product) => {
                  this.id = parametros.id;
                  this.product = product;
                  //console.log(product);
                });
        });
  }

}
