import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../cliente.service";
import {ClienteModel} from "../cliente.model";
import {CompraModel} from "../../productos/compra.model";

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  registrarCliente(id: string, nombreClient: string, correo: string){
    let cliente: ClienteModel = new ClienteModel(id, nombreClient, correo, []);
    this.clienteService.registrarCliente(cliente).subscribe((respuesta: any) => {
      alert("Se registro el cliente");
    });
  }

}
