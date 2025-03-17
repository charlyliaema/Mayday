import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  /*Router-> permite navegar de un componente a otro */
  constructor(private router:Router){}

  listarP(){
    this.router.navigate(['listar']);
  }

  guardarP(){
    this.router.navigate(['guardar']);

  }

}
