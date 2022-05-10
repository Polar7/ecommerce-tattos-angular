export class ProductoModel {
  constructor(public idProducto: number,
              public idTipoProducto: number,
              public nombre: string,
              public precioVenta: number,
              public cantidadStock: number,
              public urlImagen: string) {
  }
}
