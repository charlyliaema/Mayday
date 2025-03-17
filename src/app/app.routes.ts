import { Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import path from 'path';
import { Component } from '@angular/core';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ListarComponent } from './Componentes/listar/listar.component';
import { GuardarComponent } from './Componentes/guardar/guardar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { EliminarComponent } from './Componentes/eliminar/eliminar.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
    //{path:'',redirectTo:'inicio',pathMatch:'full'},
    {path:'inicio',component:InicioComponent},
    {path:'listar',component:ListarComponent},
    {path:'guardar',component:GuardarComponent},
    {path:'editar',component:EditarComponent},
    {path:'eliminar',component:EliminarComponent},

];
