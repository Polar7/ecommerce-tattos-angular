import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductoModel} from "./producto.model";

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  private urlTattos = 'http://localhost:8090/ecommerce-tattos/api';

  constructor(private http: HttpClient) { }

  getTodosProductos(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${this.urlTattos}/productos`);
  }

  getTatuajes(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${this.urlTattos}/productos/tipos-productos/1`);
  }

  getJoyas(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${this.urlTattos}/productos/tipos-productos/2`);
  }

  getCamisetas(): Observable<ProductoModel[]> {
    return this.http.get<ProductoModel[]>(`${this.urlTattos}/productos/tipos-productos/3`);
  }
}
