import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.component.html',
  styleUrls: ['inicio.component.css'],
})
export class InicioComponent {
  loginForm: FormGroup;
  router: any;

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario con validaciones
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });
  }

 
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulario enviado:', this.loginForm.value);
       alert('Inicio de sesión exitoso');
      
       
    } else {
      console.log('Formulario inválido');
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}