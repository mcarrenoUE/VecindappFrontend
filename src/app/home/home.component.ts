import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  hoverEffect = false; // Controla el estado del hover
  currentImage = '/images/imagen2.png'; // Imagen inicial

  onMouseEnter() {
    this.hoverEffect = true;
    this.currentImage = '/images/ima1.jpg'; // Nueva imagen
  }
  
  onMouseLeave() {
    this.hoverEffect = false;
    this.currentImage = '/images/imagen2.png'; // Imagen inicial
  }

  ngOnInit() {
    const preloadedImages = [
      '/images/imagen2.png',
      '/images/ima1.jpg'
    ];
  
    preloadedImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }
  
}



