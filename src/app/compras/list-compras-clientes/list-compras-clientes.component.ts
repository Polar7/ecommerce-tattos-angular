import { Component, OnInit } from '@angular/core';
import {ComprasService} from "../compras.service";
import {Router, UrlTree} from "@angular/router";
import {CompraModel} from "../../productos/compra.model";
import {ProductoCompraModel} from "../../productos/producto-compra.model";

@Component({
  selector: 'app-list-compras-clientes',
  templateUrl: './list-compras-clientes.component.html',
  styleUrls: ['./list-compras-clientes.component.css']
})
export class ListComprasClientesComponent implements OnInit {

  url: UrlTree | undefined;
  cliente: string = "";
  compras: CompraModel[] = [];

  constructor(private comprasService: ComprasService, private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.parseUrl(this.router.url);
    this.cliente= this.url.toString().substring(27, this.url.toString().length);
    this.comprasService.getComprasCliente(this.cliente).subscribe(data => {this.compras = data});
  }

}
