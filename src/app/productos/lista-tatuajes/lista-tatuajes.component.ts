import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../producto.service";
import {ProductoModel} from "../producto.model";

@Component({
  selector: 'app-lista-tatuajes',
  templateUrl: './lista-tatuajes.component.html',
  styleUrls: ['./lista-tatuajes.component.css']
})
export class ListaTatuajesComponent implements OnInit {

  productos: ProductoModel[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getTatuajes().subscribe(data => {this.productos = data})
  }

}
