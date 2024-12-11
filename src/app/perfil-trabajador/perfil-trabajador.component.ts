import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-trabajador',
  templateUrl: './perfil-trabajador.component.html',
  styleUrls: ['./perfil-trabajador.component.css']
})
export class PerfilTrabajadorComponent {
  trabajador = {
    nombre: 'Jorge Cubides Rondón',
    titulo: 'Maestro de obra',
    calificacion: 4.5,
    sobreMi:
      'Hola, me llamo Jorge Cubides. Soy maestro de obra con más de 15 años de experiencia...',
    habilidades: ['Fontanería', 'Plomería', 'Enchape'],
    servicios: [
      {
        titulo: 'Remodelación de Cocina',
        descripcion:
          'Diseño de remodelación para optimizar espacio en cocinas modernas...',
        imagenes: ['ruta-imagen1.jpg', 'ruta-imagen2.jpg', 'ruta-imagen3.jpg']
      },
      {
        titulo: 'Construcción de Terraza',
        descripcion:
          'Construcción de terrazas elegantes y modernas con materiales duraderos...',
        imagenes: ['ruta-imagen4.jpg', 'ruta-imagen5.jpg']
      },
      {
        titulo: 'Reparación de Tuberias',
        descripcion:
          'Me dedico a la reparación de tuberias...',
        imagenes: ['ruta-imagen4.jpg', 'ruta-imagen5.jpg']
      }
    ]
  };
   // Lista de favoritos
   service = { favorite: false }; // Esto está bien definido.

  
  toggleFavorite(service: any): void {
    service.favorite = !service.favorite;
  }
       }
     
