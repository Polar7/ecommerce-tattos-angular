import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../producto.service";
import {ProductoModel} from "../producto.model";
import {Router, UrlTree} from "@angular/router";

@Component({
  selector: 'app-lista-produto-tipo-producto',
  templateUrl: './lista-produto-tipo-producto.component.html',
  styleUrls: ['./lista-produto-tipo-producto.component.css']
})
export class ListaProdutoTipoProductoComponent implements OnInit {

  productos: ProductoModel[] = [];
  url: UrlTree | undefined;
  tipoProducto: number = 0;
  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.parseUrl(this.router.url);
    this.tipoProducto = Number(this.url.toString().charAt(this.url.toString().length - 1));
    this.productoService.getListaProductosPorTipoProductoID(this.tipoProducto).subscribe(data => {this.productos = data});
  }


}
