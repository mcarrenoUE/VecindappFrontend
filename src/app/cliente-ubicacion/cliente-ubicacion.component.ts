import { Component } from '@angular/core';
import { ServiUbiClienteService } from '../servicioCliente/servi-ubi-cliente.service';

@Component({
  selector: 'app-cliente-ubicacion',
  templateUrl: './cliente-ubicacion.component.html',
  styleUrl: './cliente-ubicacion.component.css'
})
export class ClienteUbicacionComponent {
  // Modelo de datos para la ubicación
  ubicacion = {
    direccion: '',
    barrio: '',
    localidad: '',
    ciudad: ''
  };

  // Listas de opciones dinámicas
  localidades = ['Usaquén', 'Chapinero', 'Santa Fe', 'Suba'];
  ciudades = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla'];

  // Manejo del formulario al enviar
  onSubmit(): void {
    if (this.ubicacion.direccion && this.ubicacion.barrio && this.ubicacion.localidad && this.ubicacion.ciudad) {
      console.log('Datos de ubicación enviados:', this.ubicacion);
      alert('Formulario enviado con éxito');
    } else {
      alert('Por favor completa todos los campos.');
    }
  }
}