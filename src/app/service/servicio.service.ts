import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  urlListar = "http://localhost:9001/WebService/listar";
  urlGuardar = "http://localhost:9001/WebService/guardar";
  urlBuscar = "http://localhost:9001/WebService/buscarId";
  urlEditar = "http://localhost:9001/WebService/editar";
  urlElimnar = "http://localhost:9001/WebService/eliminar";

}
