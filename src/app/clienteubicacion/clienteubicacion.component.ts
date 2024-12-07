import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clienteubicacion',
  templateUrl: './clienteubicacion.component.html',
  styleUrl: './clienteubicacion.component.css'
})
export class ClienteubicacionComponent {

  registroUbiForm!: FormGroup;
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

      constructor(private fb: FormBuilder) {}

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
          console.log('Formulario enviado:', this.registroUbiForm.value);
        } else {
          this.registroUbiForm.markAllAsTouched();
        }
      }
    }