import { Component, OnInit, Input } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //conexion = false;
  @Input() conexion: boolean;

  constructor( public infoPageService: InfoPageService, public cookieService: CookieService, private router: Router ) {
    //this.cookieService.delete('User');
    this.conexion = cookieService.check('User');
  }

  ngOnInit(): void {
  }

  refresConexion( newConexion ){
    this.conexion = newConexion;
  }

  logout(){
    this.cookieService.delete('User');
    alert( 'please reload the page' );
  }

  buscarProducto( termino: string ) {

    if ( termino.length < 1 ) {
      return;
    }

    this.router.navigate(['/search', termino]);

  }

}
