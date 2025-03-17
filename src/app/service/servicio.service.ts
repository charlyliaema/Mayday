import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productos } from '../Componentes/Productos/Productos';

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

  listar(){
    return this.http.get<Productos[]>(this.urlListar);
  }

  guardar(producto : Productos){
    return this.http.post<Productos>(this.urlGuardar,producto);
  }

  buscar(producto: Productos){
    return this.http.post<Productos>(this.urlBuscar,producto);
  }

  editar(producto:Productos){
    return this.http.post<Productos>(this.urlEditar,producto);
  }

  elimnar(producto:Productos){
    return this.http.post<Productos>(this.urlElimnar,producto);
  }

}
