import { Component, OnInit } from '@angular/core';

// Definición de la interfaz para las burbujas
interface Bubble {
  size: number;
  left: string;
  top: string;
  duration: string;
}

@Component({
  selector: 'app-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.css']
})
export class BubblesComponent implements OnInit {
  bubbles: Array<Bubble> = []; // Usar la interfaz Bubble

  ngOnInit(): void {
    this.generateBubbles();
  }

  generateBubbles() {
    for (let i = 0; i < 10; i++) {
      const size = Math.random() * (80 - 80) + 30; // Tamaño aleatorio entre 30 y 80px
      const left = `${Math.random() * 100}%`; // Posición aleatoria en el eje X
      const top = `${Math.random() * window.innerHeight}px`; // Posición vertical aleatoria
      const duration = `${Math.random() * (10 - 5) + 5}s`; // Duración aleatoria entre 5 y 10 segundos

      this.bubbles.push({ size, left, top, duration }); // Incluir top en el objeto burbuja
    }
  }
}