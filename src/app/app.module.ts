import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './areaLogada/home/home.component';
import { MenuEsquerdoComponent } from './areaLogada/menuEsquerdo/menuEsquerdo.component';
import { SubMenuComponent } from './areaLogada/submenu/submenu.component';
import { BlocoTituloComponent } from './areaLogada/blocoTitulo/blocoTitulo.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HeaderComponent, HomeComponent, MenuEsquerdoComponent, SubMenuComponent, BlocoTituloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
