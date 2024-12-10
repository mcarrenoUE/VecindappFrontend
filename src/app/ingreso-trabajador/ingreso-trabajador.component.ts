import { Component } from '@angular/core';

@Component({
  selector: 'app-ingreso-trabajador',
  templateUrl: './ingreso-trabajador.component.html',
  styleUrls: ['./ingreso-trabajador.component.css'],
})
export class IngresoTrabajadorComponent {
  selectedDate: Date | null = null;

  appointments = [
    {
      id: 1,
      type: 'Pintura',
      date: new Date('2024-09-01'),
      time: '9:30 am',
      location: 'Suba',
      address: 'Calle 129 #59 B 49',
      status: 'cumplido',
      client: 'Carlos Álvarez Páez',
    },
    {
      id: 2,
      type: 'Plomería',
      date: new Date('2024-09-01'),
      time: '11:45 pm',
      location: 'Calle 80',
      address: 'Calle 80 #10-15',
      status: 'cancelado',
      client: 'María Fernández',
    },
    {
      id: 3,
      type: 'Construcción',
      date: new Date('2024-09-01'),
      time: '3:45 pm',
      location: 'Suba',
      address: 'Calle 129 #60 B 30',
      status: 'pendiente',
      client: 'Pedro López',
    },
  ];

  filteredAppointments = [...this.appointments];
  selectedAppointment: any = null;

  // Filtrar las citas según la fecha seleccionada
  filterAppointments() {
    if (this.selectedDate) {
      this.filteredAppointments = this.appointments.filter(
        (appointment) =>
          appointment.date.toDateString() === this.selectedDate?.toDateString()
      );
    } else {
      this.filteredAppointments = [...this.appointments];
    }
  }

  // Seleccionar cita para ver detalles
  selectAppointment(appointment: any) {
    this.selectedAppointment = appointment;
  }
}
