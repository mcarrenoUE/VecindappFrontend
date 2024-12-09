import { Component } from '@angular/core';

@Component({
  selector: 'app-ingreso-cliente',
  templateUrl: './ingreso-cliente.component.html',
  styleUrl: './ingreso-cliente.component.css'
})
export class IngresoClienteComponent {

  userName: string = ''; 

  services = [

    {
      id: 2,
      name: 'Martha Beltrán Roa',
      description: 'Maquillista profesional especializada en bodas.',
      rating: 4.3,
      image: 'images/trabajo1.png',
      favorite: false
    },
    {
      id: 2,
      name: 'Martha Beltrán Roa',
      description: 'Maquillista profesional especializada en bodas.',
      rating: 4.3,
      image: 'images/inicio_trabajo.jpg',
      favorite: false
    },
    {
      id: 1,
      name: 'Jorge Cubides Rondon',
      description: 'Maestro de obra con 15 años de experiencia.',
      rating: 4.5,
      image: 'images/imagen1.png',
      favorite: false
    }


   
  ];

  // Lista de favoritos
  favorites: any[] = [];
service: any;

  // Alternar favoritos
  toggleFavorite(service: any) {
    service.favorite = !service.favorite;
    if (service.favorite) {
      this.favorites.push(service);
    } else {
      this.favorites = this.favorites.filter(fav => fav.id !== service.id);
    }
  }
}
