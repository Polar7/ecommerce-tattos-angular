import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../cliente.service";
import {ClienteModel} from "../cliente.model";

@Component({
  selector: 'app-lista-todos-clientes',
  templateUrl: './lista-todos-clientes.component.html',
  styleUrls: ['./lista-todos-clientes.component.css']
})
export class ListaTodosClientesComponent implements OnInit {

  listaClientes: ClienteModel[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getTodosClientes().subscribe(data => {this.listaClientes = data});
  }

}
