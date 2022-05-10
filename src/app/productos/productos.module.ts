import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTodosProductosComponent } from './lista-todos-productos/lista-todos-productos.component';
import { ListaTatuajesComponent } from './lista-tatuajes/lista-tatuajes.component';
import { ListaJoyasComponent } from './lista-joyas/lista-joyas.component';
import { ListaCamisetasComponent } from './lista-camisetas/lista-camisetas.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListaTodosProductosComponent,
    ListaTatuajesComponent,
    ListaJoyasComponent,
    ListaCamisetasComponent
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
