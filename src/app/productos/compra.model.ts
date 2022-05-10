import {ProductoCompraModel} from "./producto-compra.model";

export class CompraModel {
  constructor(public idCliente: string,
              public fecha: Date,
              public medioPago: string,
              public comprasProducto: ProductoCompraModel[]) {
  }
}
