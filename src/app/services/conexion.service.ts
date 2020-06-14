import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { Usuario } from '../interfaces/usuario.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { CookieService } from 'ngx-cookie-service';
import { HeaderComponent } from '../shared/header/header.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private usuariosCollection: AngularFirestoreCollection<Usuario>;
  usuarios: Observable<Usuario[]>;


  constructor(private afs: AngularFirestore, public cookieService: CookieService, private _router: Router) {
    this.usuariosCollection = afs.collection<Usuario>('usuarios');

  }
  @Output() conexionEvent = new EventEmitter<boolean>();


  getUser(email: string, pass: string){
    const firestore = firebase.firestore();
    const col = firestore.collection('usuarios');
    const query = col.where('email', '==', email);
    let encontrado = false;
    query.get().then( snapshot => {
      snapshot.docs.forEach( doc => {
        if (doc.data().contrasena === pass){
          encontrado = true;
          this.cookieService.set( 'User', doc.data().name );
          alert('please refresh the page');
          setTimeout(() => {
            this.conexionEvent.emit(encontrado);
            this._router.navigate(['home']);
            return encontrado;
          }, 1000);
        }else{
          alert(' this combination of email and password is incorrect ');
          return encontrado;
        }
      });
    });
  }
  existeEmail(email: string){
    let encontrado = true;
    const firestore = firebase.firestore();
    const col = firestore.collection('usuarios');
    const query = col.where('email', '==', email);
    query.get().then( snapshot => {
      snapshot.docs.forEach( doc => {
        encontrado = false;
      });
    });

    return encontrado;
  }

  addUsuario(usuario: Usuario){
    this.usuariosCollection.add(usuario);
    this._router.navigate(['login']);
  }

}
