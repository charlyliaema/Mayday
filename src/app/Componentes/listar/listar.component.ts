import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicioService } from '../../service/servicio.service';
import { Router } from 'express';
import { Productos } from '../Productos/Productos';

@Component({
  selector: 'app-listar',
  imports: [CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  constructor(private service:ServicioService,private router:Router){
  }

  // lista
  lista:Productos[];

/* ngOnInit -> carga los objetos una vez que inicia el DOM */
  ngOnInit(): void {
    this.listaProd();
    }

  listaProd(){
    this.service.listar().subscribe(data =>{
      this.lista = data;
      console.log("Lista de productos:")
    })
  }  

}
