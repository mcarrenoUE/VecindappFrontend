import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { BubblesComponent } from './bubbles/bubbles.component';
import { BuscarServiciosComponent } from './buscar-servicios/buscar-servicios.component';
import { OfrecerServiciosComponent } from './ofrecer-servicios/ofrecer-servicios.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IniciotrabajadorComponent } from './iniciotrabajador/iniciotrabajador.component';
import { RegistrotrabajadorComponent } from './registrotrabajador/registrotrabajador.component';
import { environment } from '../environment';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ClienteUbicacionComponent } from './cliente-ubicacion/cliente-ubicacion.component';
import { IngresoClienteComponent } from './ingreso-cliente/ingreso-cliente.component';
import { TrabajaNosotrosComponent } from './trabaja-nosotros/trabaja-nosotros.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InicioComponent,
    RegistroComponent,
    BubblesComponent,
    BuscarServiciosComponent,
    OfrecerServiciosComponent,
    FooterComponent,
    IniciotrabajadorComponent,
    RegistrotrabajadorComponent,
    SobreNosotrosComponent,
    ClienteUbicacionComponent,
    IngresoClienteComponent,
    TrabajaNosotrosComponent,
   
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
