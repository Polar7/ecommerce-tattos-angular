import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTodosProductosComponent } from './lista-todos-productos/lista-todos-productos.component';
import {FormsModule} from "@angular/forms";
import { ListaProdutoTipoProductoComponent } from './lista-produto-tipo-producto/lista-produto-tipo-producto.component';



@NgModule({
  declarations: [
    ListaTodosProductosComponent,
    ListaProdutoTipoProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListaTodosProductosComponent
  ]
})
export class ProductosModule { }
