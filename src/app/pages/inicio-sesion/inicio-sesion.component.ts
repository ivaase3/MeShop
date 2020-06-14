import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { Usuario } from '../../interfaces/usuario.interface';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  usuario: Usuario;

  // tslint:disable-next-line: variable-name
  constructor(private conexion: ConexionService, public cookieService: CookieService) {
  }

  ngOnInit(): void {
  }


  buscaUsuario( email: string, pass: string) {
    this.conexion.getUser( email, pass);
  }

}
