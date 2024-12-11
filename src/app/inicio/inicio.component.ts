import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { LoginClienteServiceService } from '../services/Autenticacion/loginCliente-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.component.html',
  styleUrls: ['inicio.component.css'],
})
export class InicioComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, 
              private auth: AngularFireAuth, 
              private router: Router, 
              private loginService: LoginClienteServiceService) {

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
    // Verificar si el formulario es válido
    if (this.loginForm.valid) {
        console.log('Formulario enviado:', this.loginForm.value);
        
        // Obtener los valores del formulario
        const { email, password } = this.loginForm.value;

        // Llamar al servicio de login
        this.loginService.login(email, password).subscribe({
            next: (response) => {
                // Guarda el token y el clientId
                this.loginService.storeTokenInCookie(response.token);
                //this.loginService.saveClientIdInCookie(response.userId);

                // Redireccionar a la página de inicio
                console.log('Login exitoso');
                alert('Inicio de sesión exitoso');
                this.router.navigate(["/ingreso-cliente"]);
            },
            error: (error) => {
                console.error('Error en login:', error);
            }
        });
    } else {
        // Mostrar mensaje si el formulario no es válido
        console.log('Formulario inválido');
        alert('Por favor, completa todos los campos correctamente.');
    }
}


 /* onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulario enviado:', this.loginForm.value);
      alert('Inicio de sesión exitoso');
    } else {
      console.log('Formulario inválido');
      alert('Por favor, completa todos los campos correctamente.');
    }
  }*/

  /*loginWithGoogle(): void {
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
  }*/

      
      loginWithGoogle(): void {
        this.auth
          .signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then((result) => {
            const user = result.user;
      
            if (user?.email) {
              console.log('Usuario autenticado con Google:', user.email);
      
              // Reutilizar el servicio de login para validar el correo en la base de datos
              this.loginService.checkUserByEmail(user.email).subscribe({
                next: (response) => {
                  if (response && response.token) {
                    // El usuario está registrado y se le devuelve un token JWT
                    this.loginService.storeTokenInCookie(response.token);
                    console.log('Login exitoso con Google');
                    alert('Inicio de sesión exitoso con Google');
                    this.router.navigate(['/ingreso-cliente']);
                  }
                },
                error: (error) => {
                  console.error('El usuario autenticado con Google no está registrado:', error);
                  alert(
                    'El usuario autenticado con Google no está registrado. Por favor, regístrate primero.'
                  );
                  this.auth.signOut(); // Cierra sesión si no está registrado
                },
              });
            } else {
              console.error('No se pudo obtener el correo del usuario.');
              alert('No se pudo obtener el correo del usuario. Por favor, inténtalo de nuevo.');
            }
          })
          .catch((error) => {
            console.error('Error al iniciar sesión con Google:', error);
            alert('Error al iniciar sesión con Google. Por favor, inténtalo de nuevo.');
          });
      }
          

      

      
      
}
