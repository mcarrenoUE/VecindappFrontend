import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.css'
})
export class SobreNosotrosComponent {

  carouselRide = 'carousel';
  slides = [
    '/images/aviso1.png',
    '/images/aviso2.png',
    '/images/aviso3.png',
    '/images/aviso4.png',
    '/images/aviso5.png'
  ];
}