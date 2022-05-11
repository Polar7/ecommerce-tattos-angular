import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {ProductosModule} from "./productos/productos.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ClientesModule} from "./clientes/clientes.module";
import {ComprasModule} from "./compras/compras.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        ProductosModule,
        ClientesModule,
        ComprasModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
