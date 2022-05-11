import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CompraModel} from "../productos/compra.model";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ClienteModel} from "../clientes/cliente.model";

@Injectable({
  providedIn: 'root'
})

/**
 * Servicio de Compras encargado de comunicar con el back de Compras de la api
 */
export class ComprasService {

  /**
   * Construye un nuevo servicio de Compras
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Consulta y retorna las compras hechas por un cliente
   * @param idCliente
   */
  getComprasCliente(idCliente: string): Observable<CompraModel[]> {
    return this.http.get<CompraModel[]>(`${environment.url_api}/compras/clientes/${idCliente}`);
  }

  /**
   * Guarda una nueva compra en la api
   * @param compra Compra a guardar
   * @return Observable del metodo Post a Compras
   */
  guardarCompra(compra: CompraModel): Observable<CompraModel> {
    return this.http.post<CompraModel>(`${environment.url_api}/compras`, compra);
  }

  /**
   * Guarda un nuevo cliente en la api
   * @param cliente Cliente a guardar
   * @return Observable del metodo Post a Clientes
   */
  registrarCliente(cliente: ClienteModel): Observable<ClienteModel> {
    return this.http.post<ClienteModel>(`${environment.url_api}/clientes`, cliente);
  }
}
