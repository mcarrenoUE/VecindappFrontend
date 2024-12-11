import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelUbicacion } from '../models/Ubicacion/model-ubicacion';

@Component({
  selector: 'app-clienteubicacion',
  templateUrl: './clienteubicacion.component.html',
  styleUrl: './clienteubicacion.component.css'
})
export class ClienteubicacionComponent {

  registroUbiForm!: FormGroup;
  ubicacion : ModelUbicacion;

  localidades: string[] = [
    'Usaquén',
    'Chapinero',
    'Suba',
    'Engativá',
    'Fontibón',
    'Antonio Nariño',
    'Barrios Unidos',
    'Bosa',
    'Ciudad Bolívar',
    'Kennedy',
    'La Candelaria',
    'Los Mártires',
    'Puente Aranda',
    'Rafael Uribe Uribe',
    'San Cristóbal',
    'Santa Fe',
    'Sumapaz',
    'Teusaquillo',
    'Tunjuelito',
    'Usme'
    ];
    ciudades: string[] = [
      'Bogotá',
      'Medellín',
      'Cali',
      'Barranquilla',
      'Cartagena',
      'Bucaramanga',
      'Pereira',
      'Ibagué',
      'Santa Marta',
      'Cúcuta'
      ];

      constructor(private fb: FormBuilder, private route:Router) {

        const user = JSON.parse(localStorage.getItem('cliente')||'{}');
        this.ubicacion = new ModelUbicacion('','','','');
      }
      ngOnInit(): void {
        this.registroUbiForm = this.fb.group({
          direccion: [
            '',
            [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s#\-.,]+$/)],
          ],
          barrio: [
            '',
            [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)],
          ],
          localidad: ['', Validators.required],
          ciudad: ['', Validators.required],
          terminos: [false, Validators.requiredTrue]
          
        });
        
      }

    
    
      get direccion() {
        return this.registroUbiForm.get('direccion')!;
      }
    
      get barrio() {
        return this.registroUbiForm.get('barrio')!;
      }
    
      get localidad() {
        return this.registroUbiForm.get('localidad')!;
      }
    
      get ciudad() {
        return this.registroUbiForm.get('ciudad')!;
      }
    
      onSubmit(): void {
        if (this.registroUbiForm.valid) {
          this.ubicacion.direccion = this.registroUbiForm.value.direccion;
          this.ubicacion.barrio = this.registroUbiForm.value.barrio;
          this.ubicacion.localidad = this.registroUbiForm.value.localidad;
          this.ubicacion.ciudad = this.registroUbiForm.value.ciudad;

          localStorage.setItem('ubicacion', JSON.stringify(this.ubicacion));

          
          this.route.navigate(['crear-usuario']);
          
          console.log('Formulario enviado:', this.registroUbiForm.value);
        } else {
          this.registroUbiForm.markAllAsTouched();
        }
      }
    }