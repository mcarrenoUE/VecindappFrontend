import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ingresocliente',
  templateUrl: './ingresocliente.component.html',
  styleUrl: './ingresocliente.component.css'
})
export class IngresoclienteComponent {
  services: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('API_URL/services').subscribe((data: any) => {
      this.services = data;
    });
  }
}

