import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios-ofrecer',
  templateUrl: './servicios-ofrecer.component.html',
  styleUrl: './servicios-ofrecer.component.css'
})
export class ServiciosOfrecerComponent {

  servicios = [
    {
      nombre: 'Plomería',
      descripcion: 'Solución rápida y profesional para fugas y tuberías dañadas.',
      imagen: '/images/plomeria.jpg'
    },
    {
      nombre: 'Electricidad',
      descripcion: 'Reparaciones y mantenimiento eléctrico seguro y confiable.',
      imagen: '/images/electricidad.jpg'
    },
    {
      nombre: 'Limpieza',
      descripcion: 'Limpieza profunda para hogares y oficinas.',
      imagen: '/images/limpieza.jpg'
    },
    {
      nombre: 'Costura',
      descripcion: 'Arreglos y confecciones de ropa personalizada.',
      imagen: '/images/costura.jpg'
    }
  ];
  testimonios = [
    {
      nombre: 'Carlos López',
      opinion: 'El servicio de plomería fue excepcional, rápido y confiable. ¡Muy recomendado!'
    },
    {
      nombre: 'María González',
      opinion: 'Gracias a su servicio de limpieza, mi oficina quedó impecable. Excelente trabajo.'
    },
    {
      nombre: 'Luis Martínez',
      opinion: 'Los electricistas son muy profesionales. Me solucionaron un problema complicado en minutos.'
    }
  ];

 
  }



