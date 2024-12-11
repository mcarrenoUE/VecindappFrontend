import { Component } from '@angular/core';
import { ModelCrearUser } from '../models/CrearUsuario/model-crear-user';

import { Router } from '@angular/router';
import { RegistroClienteService } from '../services/registroCliente/registro-cliente.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrl: './registrar-cliente.component.css'
})
export class RegistrarClienteComponent {

  usuario:ModelCrearUser;

  constructor(private registrar:RegistroClienteService, private router:Router ){
     // Recuperar los datos almacenados de ambos formularios
     const user = JSON.parse(localStorage.getItem('cliente')||'{}');
     const ubi = JSON.parse(localStorage.getItem('ubicacion')||'{}');

     this.usuario = new ModelCrearUser(user,ubi);
  }
  
  onSubmit(){
    this.registrar.registarcliente(this.usuario).subscribe({
      next:(Response)=>{
        alert('Registro de usuario exitoso');
        this.router.navigate(["/inicio"]);
      
    },
    error: (error) => {
        console.error('Error en login:', error);
    }
    })
  }

}
