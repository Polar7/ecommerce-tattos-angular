import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./landing/inicio/inicio.component";
import {ContactoComponent} from "./landing/contacto/contacto.component";
import {ListaTodosProductosComponent} from "./productos/lista-todos-productos/lista-todos-productos.component";
import {ListaTatuajesComponent} from "./productos/lista-tatuajes/lista-tatuajes.component";
import {ListaJoyasComponent} from "./productos/lista-joyas/lista-joyas.component";
import {ListaCamisetasComponent} from "./productos/lista-camisetas/lista-camisetas.component";

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'productos', component:ListaTodosProductosComponent},
  {path: 'productos/tatuajes', component:ListaTatuajesComponent},
  {path: 'productos/joyas', component:ListaJoyasComponent},
  {path: 'productos/camisetas', component:ListaCamisetasComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
