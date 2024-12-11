import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModelCliente } from '../models/Cliente/model-cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  registerForm: FormGroup;
  cliente: ModelCliente;

constructor(private fb: FormBuilder, private router: Router) {
  this.registerForm = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/), // Solo letras y espacios.
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/), // Solo letras y espacios.
        ],
      ],
      fechaNacimiento: [
        '',
        [Validators.required, this.isAdultValidator],
      ],
      correo: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ), // Formato de correo electrónico estándar.
        ],
      ],
      confirmarCorreo: ['', [Validators.required]],
      contrasena: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/

          ), 
        ],
      ],
      confirmarContrasena: ['', [Validators.required]],
    },
    {
      validators: [this.emailsMatchValidator, this.passwordsMatchValidator],
    }
  );

  this.cliente = new ModelCliente('','','');
}

// Validador para mayor de edad
isAdultValidator(control: any) {
  const fechaNacimiento = new Date(control.value);
  const edad = new Date().getFullYear() - fechaNacimiento.getFullYear();
  return edad >= 18 ? null : { isAdult: true };
}

// Validadores personalizados
emailsMatchValidator(group: FormGroup) {
  const correo = group.get('correo')?.value;
  const confirmarCorreo = group.get('confirmarCorreo')?.value;
  return correo === confirmarCorreo ? null : { emailsMismatch: true };
}

passwordsMatchValidator(group: FormGroup) {
  const contrasena = group.get('contrasena')?.value;
  const confirmarContrasena = group.get('confirmarContrasena')?.value;
  return contrasena === confirmarContrasena ? null : { passwordsMismatch: true };
}




onRegister() {
  if (this.registerForm.valid) {
    this.cliente.nombre = this.registerForm.value.nombre;
    this.cliente.correo = this.registerForm.value.correo;
    this.cliente.contrasena = this.registerForm.value.contrasena;

    // Guardar el objeto RegistroModel, por ejemplo, en localStorage
    localStorage.setItem('registro', JSON.stringify(this.cliente));
    this.router.navigate(['/clienteubicacion']);

    console.log('Formulario válido:', this.registerForm.value);
    alert('Registro Exitoso');
  } else {
    console.log('Formulario inválido');
    alert('Por favor, completa todos los campos correctamente.');
  }
}
}