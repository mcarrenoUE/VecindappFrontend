import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiUbiClienteService {
  getCiudades(): string[] {
    throw new Error('Method not implemented.');
  }
  getLocalidades(): string[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
