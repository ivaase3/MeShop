import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireDatabase} from '@angular/fire/database';
import { Product } from '../../interfaces/product.interface';
import { stringify } from 'querystring';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  urlImage: Observable<string>;
  items: Observable<any[]>;
  items2: any;
  countItems: number;
  downloadURL: Observable<string>;
  ruta: string;


  constructor(  db: AngularFireDatabase, private storage: AngularFireStorage, public cookieService: CookieService,
     private _router: Router) {

    this.items = db.list('productos').valueChanges();
    this.items2 = db.list('productos');
    this.items.subscribe( result => {
      //console.log('tamaio', result.length);
      this.countItems =  result.length;
    });
  }
  uploadPercent: Observable<number>;
  @ViewChild('url') inputImageUser;

  private image: any;
  ngOnInit(): void {
    //console.log(this.inputImageUser);
  }

  uploadImage(e){
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `products/product_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize( () => this.downloadURL = ref.getDownloadURL() )
    ).subscribe();
  }

  uploadProduct( name: string, descrip: string, price: number, category: string){
    this.items.subscribe( result => {
      this.countItems =  result.length;
    });
    //console.log(this.inputImageUser.nativeElement.innerHTML);
    const photoURL = this.inputImageUser.nativeElement.value;
    //console.log(photoURL);
    // tslint:disable-next-line: max-line-length
    this.items2.update( '' + this.countItems , { categoria: category, nombre: name, precio: '' + price,
     url: this.inputImageUser.nativeElement.innerHTML, vendedor: this.cookieService.get('User'), descripcion: descrip,
     cod: '' + this.countItems } );
    alert(name + ' subido con exito');
    this._router.navigate(['home']);
  }


  handleImage(event: any): void {
    this.image = event.target.files[0];
    //console.log(this.image);
  }
}
