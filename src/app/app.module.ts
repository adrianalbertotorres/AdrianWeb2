import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { PaginasWebComponent } from './paginas-web/paginas-web.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  { path: 'inicio', component:InicioComponent },
  { path: 'paginas-web', component:PaginasWebComponent},

  { path: '', component:InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    PaginasWebComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
