import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./landing/inicio/inicio.component";
import {ContactoComponent} from "./landing/contacto/contacto.component";

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  //{path: 'productos', component:},
  //{path: 'productos/tatuajes', component:},
  //{path: 'productos/joyas', component:},
  //{path: 'productos/camisetas', component:},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
