import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingreso-cliente',
  templateUrl: './ingreso-cliente.component.html',
  styleUrls: ['./ingreso-cliente.component.css']
})
export class IngresoClienteComponent {
  userName: string = '';

  services = [
    {
      id: 2,
      name: 'Martha Beltrán Roa',
      description: 'Maquillista profesional especializada en bodas.',
      rating: 4.5,
      image: 'images/maquillista.jpg',
      favorite: false
    },
    {
      id: 2,
      name: 'Chayanne Gonzales',
      description: 'Paseador de perros. Su lema "Aprobado por Chayanne".',
      rating: 4.3,
      image: 'images/chayanne.jpg',
      favorite: false
    },
    {
      id: 1,
      name: 'Jorge Cubides Rondon',
      description: 'Maestro de obra con 15 años de experiencia.',
      rating: 4.9,
      image: 'images/PLOMEROLINDO.jpg',
      favorite: false
    }
  ];

  favorites: any[] = [];


testimonials: { name: string, feedback: string }[] = [
  { name: 'Laura Pérez', feedback: 'El mejor servicio, me encantó trabajar con ellos. ¡Altamente recomendados!' },
  { name: 'Carlos Gómez', feedback: 'Excelente atención y resultados. Definitivamente volveré.' },
  { name: 'Ana Sánchez', feedback: 'Muy profesionales, superaron mis expectativas. ¡Gracias por todo!' }
];

// Preguntas frecuentes de ejemplo
faqs: { question: string, answer: string }[] = [
  { question: '¿Cómo puedo contactar a un trabajador?', answer: 'Puedes contactar a los trabajadores a través del botón "Contactar" en su perfil.' },
  { question: '¿Cómo agregar un servicio a favoritos?', answer: 'Haz clic en el ícono de corazón en la tarjeta del servicio para agregarlo a favoritos.' },
  { question: '¿El registro es gratuito?', answer: 'Sí, el registro en nuestra plataforma es completamente gratuito.' }
];





  constructor(private router: Router) {}

  toggleFavorite(service: any) {
    service.favorite = !service.favorite;
    if (service.favorite) {
      this.favorites.push(service);
    } else {
      this.favorites = this.favorites.filter(fav => fav.id !== service.id);
    }
  }

  logout(): void {
    // Limpia datos del usuario
    localStorage.clear();
    // Redirige primero
    this.router.navigate(['/inicio']).then(() => {
      alert('Sesión cerrada correctamente');
    });
  }
}
