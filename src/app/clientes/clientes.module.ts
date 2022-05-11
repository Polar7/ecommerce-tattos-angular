import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTodosClientesComponent } from './lista-todos-clientes/lista-todos-clientes.component';
import {RouterModule} from "@angular/router";
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';



@NgModule({
  declarations: [
    ListaTodosClientesComponent,
    RegistrarClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ClientesModule { }
