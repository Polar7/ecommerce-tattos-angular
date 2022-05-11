import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./landing/inicio/inicio.component";
import {ContactoComponent} from "./landing/contacto/contacto.component";
import {ListaTodosProductosComponent} from "./productos/lista-todos-productos/lista-todos-productos.component";
import {ListaTodosClientesComponent} from "./clientes/lista-todos-clientes/lista-todos-clientes.component";
import {ListaProdutoTipoProductoComponent} from "./productos/lista-produto-tipo-producto/lista-produto-tipo-producto.component";
import {ListComprasClientesComponent} from "./compras/list-compras-clientes/list-compras-clientes.component";
import {RegistrarClienteComponent} from "./clientes/registrar-cliente/registrar-cliente.component";

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'productos', component:ListaTodosProductosComponent},
  {path: 'productos/tipo-producto/:id', component:ListaProdutoTipoProductoComponent},
  {path: 'clientes', component:ListaTodosClientesComponent},
  {path: 'clientes/compras/clientes/:id', component:ListComprasClientesComponent},
  {path: 'clientes/registrar', component: RegistrarClienteComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
