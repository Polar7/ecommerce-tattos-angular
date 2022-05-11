import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClienteModel} from "./cliente.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
/**
 * Moldea un servicio de Cliente encargado de comunicarse con el back
 */
export class ClienteService {

  /**
   * Construye un nuevo servicio de Cliente
   * @param http HttpCliente para las peticiones a la api
   */
  constructor(private http: HttpClient) { }

  /**
   * Consulta y retorna todos los clientes
   * @return Observable del metodos Get de Clientes
   */
  getTodosClientes(): Observable<ClienteModel[]>{
    return this.http.get<ClienteModel[]>(`${environment.url_api}/clientes`);
  }

  registrarCliente(cliente: ClienteModel): Observable<ClienteModel> {
    return this.http.post<ClienteModel>(`${environment.url_api}/clientes`, cliente);
  }

}
