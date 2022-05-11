import {CompraModel} from "../productos/compra.model";

export class ClienteModel {
  constructor(public idCliente: string,
              public nombreCompleto: string,
              public correo: string,
              public compras: CompraModel[]) {
  }
}
