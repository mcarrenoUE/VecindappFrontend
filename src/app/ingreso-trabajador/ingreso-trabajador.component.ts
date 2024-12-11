import { Component } from '@angular/core';

@Component({
  selector: 'app-ingreso-trabajador',
  templateUrl: './ingreso-trabajador.component.html',
  styleUrls: ['./ingreso-trabajador.component.css'],
})
export class IngresoTrabajadorComponent {
  eventos = [
    { titulo: 'Pintura', hora: '9:30 am', lugar: 'Suba' },
    { titulo: 'Plomería', hora: '11:45 pm', lugar: 'Calle 80' },
    { titulo: 'Pintura', hora: '12:15 pm', lugar: 'Calle 80' },
    { titulo: 'Construcción', hora: '3:45 pm', lugar: 'Suba' }
  ];
}