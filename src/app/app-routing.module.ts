import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewItemComponent } from './pages/new-item/new-item.component';
import { SearchComponent } from './pages/search/search.component';





// tslint:disable-next-line: variable-name
const app_routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'item/:id', component: ItemComponent},
    {path: 'login/register', component: RegisterComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'newItem', component: NewItemComponent},
    {path: 'search/:termino', component: SearchComponent},
    {path: 'login', component: InicioSesionComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
