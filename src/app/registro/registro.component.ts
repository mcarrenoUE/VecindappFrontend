import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  registerForm: FormGroup;

constructor(private fb: FormBuilder) {
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
    console.log('Formulario válido:', this.registerForm.value);
    alert('Registro Exitoso');
  } else {
    console.log('Formulario inválido');
    alert('Por favor, completa todos los campos correctamente.');
  }
}
}