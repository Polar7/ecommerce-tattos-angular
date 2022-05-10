import { Component, OnInit } from '@angular/core';
import {ProductoModel} from "../producto.model";
import {ProductoService} from "../producto.service";

@Component({
  selector: 'app-lista-joyas',
  templateUrl: './lista-joyas.component.html',
  styleUrls: ['./lista-joyas.component.css']
})
export class ListaJoyasComponent implements OnInit {

  productos: ProductoModel[] = [];
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getJoyas().subscribe(data => {this.productos = data})
  }

}
