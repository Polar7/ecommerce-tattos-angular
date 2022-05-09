import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    InicioComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
