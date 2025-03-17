import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form:FormGroup;

  constructor(private router:Router, private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      usuario : ['',Validators.required],
      password : ['',Validators.required]
    });
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    console.log("usuario"+usuario);
    console.log("passord"+password);

    if(usuario == "carlos" && password=="12345"){
      //redireccinar a componente
      Swal.fire({
        title: "Bienvenidos",
        text: "Ingreso exitoso!",
        icon: "success",
        timer:1500
      });
      this.router.navigate(['inicio']);
    }else{
      Swal.fire({
        title: "error",
        text: "Usurario o Contraseña Incorrecta!",
        icon: "error",
        timer:1500
      });

    }
  }

}
