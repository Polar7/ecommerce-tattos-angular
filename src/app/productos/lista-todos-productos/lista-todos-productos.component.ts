import { Component, OnInit } from '@angular/core';
import {ProductoModel} from "../producto.model";
import {ProductoService} from "../producto.service";
import {ProductoCompraModel} from "../producto-compra.model";
import {CompraModel} from "../compra.model";
import {ComprasService} from "../../compras/compras.service";

@Component({
  selector: 'app-lista-todos-productos',
  templateUrl: './lista-todos-productos.component.html',
  styleUrls: ['./lista-todos-productos.component.css']
})
export class ListaTodosProductosComponent implements OnInit {

  productos: ProductoModel[] = [];
  productosCompra: ProductoCompraModel[] = [];
  totalCarrito: number = 0;
  cliente: string = "";
  medioPago: string = "";

  constructor(private productoService: ProductoService, private compraService: ComprasService) { }

  ngOnInit(): void {
    this.productoService.getTodosProductos().subscribe(data => {this.productos = data})
    if(localStorage.getItem('carrito') != null && localStorage.getItem('totalCarrito')) {
      let carritoJson: any = localStorage.getItem('carrito');
      let totalCarritoJson: any = localStorage.getItem('totalCarrito');
      this.productosCompra = JSON.parse(carritoJson);
      this.totalCarrito = JSON.parse(totalCarritoJson);
    }
  }

  agregarACarrito(productoNuevo: ProductoModel): void {
    let agregado: boolean = false;
    this.productosCompra.forEach( (producto: ProductoCompraModel) => {
      if(producto.nombre == productoNuevo.nombre){
        if((producto.cantidad +1) > productoNuevo.cantidadStock){
          alert("No puede agregar más productos ya que no hay stock");
          agregado = true;
        }else{
          producto.cantidad++;
          producto.total += productoNuevo.precioVenta;
          agregado = true;
          this.totalCarrito += productoNuevo.precioVenta;
        }
      }
    } );
    if(agregado == false){
      this.productosCompra.push(new ProductoCompraModel(productoNuevo.idProducto, productoNuevo.nombre, 1, productoNuevo.precioVenta));
      this.totalCarrito += productoNuevo.precioVenta;
    }
    localStorage.setItem('totalCarrito', JSON.stringify(this.totalCarrito));
    localStorage.setItem('carrito', JSON.stringify(this.productosCompra));
  }

  eliminarDeCarrito(productoExistente: ProductoModel): void {
    this.productosCompra.forEach( (producto: ProductoCompraModel) => {
      if(producto.nombre == productoExistente.nombre){
        if((producto.cantidad - 1) == 0 ){
          this.productosCompra.splice(this.productosCompra.indexOf(producto), 1);
          this.totalCarrito -= productoExistente.precioVenta;
        }else{
          producto.cantidad--;
          producto.total -= productoExistente.precioVenta;
          this.totalCarrito -= productoExistente.precioVenta;
        }
      }
    } );
    localStorage.setItem('totalCarrito', JSON.stringify(this.totalCarrito));
    localStorage.setItem('carrito', JSON.stringify(this.productosCompra));
  }

  guardarCompra(): void {
    if(this.medioPago == "" || this.cliente == "" || this.productosCompra.length == 0){
      alert("Debe insertar valores diferentes de vacio")
    } else
    {
      let compra: CompraModel = new CompraModel(this.cliente, new Date(), this.medioPago, this.productosCompra);

      this.compraService.guardarCompra(compra).subscribe((respuesta: any) => {
        alert("Se realizo la compra");
      }, error => {
        if(error.error.status == 500){
          alert("El usuario no existe");
        }else {
          alert(error.error.status + ":" + error.error.error);
        }
        console.log(error);
      });
    }
  }

  limpiarCompra(): void {
    this.cliente = "";
    this.medioPago = "";
    this.productosCompra = [];
    this.totalCarrito = 0;
    localStorage.clear();
  }

}
