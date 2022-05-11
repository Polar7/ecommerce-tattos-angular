import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductoModel} from "./producto.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

/**
 * Moldea un servicio de producto encargado de comunicarse con el back
 */
export class ProductoService {


  /**
   * Representa un servicio de Producto
   * @param http HttpClient para las peticiones al back
   */
  constructor(private http: HttpClient) { }

  /**
   * Consulta y retorna todos los productos
   * @return Observable del metodos Get de Productos
   */
  getTodosProductos(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${environment.url_api}/productos`);
  }

  /**
   * Consulta y retorna todos los productos con determinado ID
   * @param idTipoProducto Id de los tipos de productos
   * @return Observable del metodo Get de Productos con dicho Tipo producto
   */
  getListaProductosPorTipoProductoID(idTipoProducto: number): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${environment.url_api}/productos/tipos-productos/${idTipoProducto}`);
  }

}
