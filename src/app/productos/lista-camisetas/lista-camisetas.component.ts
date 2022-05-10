import { Component, OnInit } from '@angular/core';
import {ProductoModel} from "../producto.model";
import {ProductoService} from "../producto.service";

@Component({
  selector: 'app-lista-camisetas',
  templateUrl: './lista-camisetas.component.html',
  styleUrls: ['./lista-camisetas.component.css']
})
export class ListaCamisetasComponent implements OnInit {

  productos: ProductoModel[] = [];
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getCamisetas().subscribe(data => {this.productos = data})
  }

}
