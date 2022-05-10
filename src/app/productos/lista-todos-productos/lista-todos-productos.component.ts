import { Component, OnInit } from '@angular/core';
import {ProductoModel} from "../producto.model";
import {ProductoService} from "../producto.service";

@Component({
  selector: 'app-lista-todos-productos',
  templateUrl: './lista-todos-productos.component.html',
  styleUrls: ['./lista-todos-productos.component.css']
})
export class ListaTodosProductosComponent implements OnInit {

  productos: ProductoModel[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getTodosProductos().subscribe(data => {this.productos = data})
  }

}
