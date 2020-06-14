import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { NewItemComponent } from './pages/new-item/new-item.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';


import { FormsModule } from '@angular/forms';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RegisterComponent } from './pages/register/register.component';

import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ConexionService } from './services/conexion.service';
import { CookieService } from 'ngx-cookie-service';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ItemComponent,
    NewItemComponent,
    InicioSesionComponent,
    RegisterComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [ConexionService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
