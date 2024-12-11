
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.css']
})
export class WorkerProfileComponent {
  worker = {
    id: '1', // ID del trabajador
    name: 'Juan Pérez',
    description: 'Plomero con 5 años de experiencia'
  };

  constructor(private router: Router) {}

  contactWorker() {
    // Redirige al chat pasando el ID del trabajador como parámetro
    this.router.navigate(['/chat', this.worker.id]);
  }
}
