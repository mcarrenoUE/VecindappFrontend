import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.component.html',
  styleUrls: ['inicio.component.css'],
})
export class InicioComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth) {
    // Inicializar el formulario con validaciones
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
      ],
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

  loginWithGoogle(): void {
    // Abrir ventana de autenticación de Google directamente
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        console.log('Inicio de sesión con Google exitoso:', result);
        alert('Inicio de sesión con Google exitoso');
      })
      .catch((error) => {
        console.error('Error al iniciar sesión con Google:', error);
        alert('Error al iniciar sesión con Google. Por favor, inténtalo de nuevo.');
      });
  }
}
