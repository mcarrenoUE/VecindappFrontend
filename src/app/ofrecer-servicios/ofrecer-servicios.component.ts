import { Component } from '@angular/core';

@Component({
  selector: 'app-ofrecer-servicios',
  templateUrl: './ofrecer-servicios.component.html',
  styleUrl: './ofrecer-servicios.component.css'
})
export class OfrecerServiciosComponent {
  //data binding por propiedad
private policities:string="Todos los Derechos Reservados";

//public test:string="<strong>Prueba</strong>";

public getPolicities():string{
  return this.policities;
}


}
