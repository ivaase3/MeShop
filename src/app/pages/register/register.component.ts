import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //usuario: Usuario;
  usuario: any = {
    name: '',
    email: '',
    contrasena: ''
  };

  constructor(private conexon: ConexionService, private router: Router) { }

  ngOnInit(): void {
  }

  agregar( nombre: string, pass: string, email: string){
    this.usuario.name = nombre;
    this.usuario.contrasena = pass;
    this.usuario.email = email;
    //console.log(this.conexon.existeEmail(email));
    if (this.conexon.existeEmail(email)){
      this.conexon.addUsuario(this.usuario);
      this.router.navigate(['home']);
      alert( 'you have successfully registered' );
    }else{
      alert('este email ya tiene una cuenta');
    }
    this.usuario.name = '';
    this.usuario.contrasena = '';
    this.usuario.email = '';
  }


}
