import { Component, OnInit } from '@angular/core';
import { Event, Day } from '../models/event.model';


@Component({
  selector: 'app-ingreso-trabajador',
  templateUrl: './ingreso-trabajador.component.html',
  styleUrls: ['./ingreso-trabajador.component.css']
})
export class IngresoTrabajadorComponent implements OnInit {
  days: Day[] = [];
  events: Event[] = [];
  selectedEvent: Event = { type: '', time: '', location: '', date: '' };

  ngOnInit(): void {
    this.generateMockCalendar();
    this.events = [
      { type: 'Pintura', time: '9:30 am', location: 'Suba', date: '2024-09-01' },
      { type: 'Plomería', time: '11:45 pm', location: 'Calle 80', date: '2024-09-01' },
      // Agrega más eventos aquí
    ];
  }

  generateMockCalendar(): void {
    for (let i = 1; i <= 30; i++) {
      this.days.push({ date: i, isToday: i === new Date().getDate() });
    }
  }

  selectEvent(event: Event): void {
    this.selectedEvent = event;
  }
}
