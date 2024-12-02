import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
//data binding por propiedad
private policities:string="Todos los Derechos Reservados";

//public test:string="<strong>Prueba</strong>";

public getPolicities():string{
  return this.policities;
}



}