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
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { IngresoClienteComponent } from './ingreso-cliente/ingreso-cliente.component';
import { TrabajaNosotrosComponent } from './trabaja-nosotros/trabaja-nosotros.component';
import { ClienteubicacionComponent } from './clienteubicacion/clienteubicacion.component';
import { RegistrodostrabajadorComponent } from './registrodostrabajador/registrodostrabajador.component';
import { RegistrotrestrabajadorComponent } from './registrotrestrabajador/registrotrestrabajador.component';

import { MenuComponent } from './menu/menu.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environment/environment';
import { IngresoTrabajadorComponent } from './ingreso-trabajador/ingreso-trabajador.component';
import { PerfilTrabajadorComponent } from './perfil-trabajador/perfil-trabajador.component';
import { ServiciosOfrecerComponent } from './servicios-ofrecer/servicios-ofrecer.component';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    IngresoClienteComponent,
    TrabajaNosotrosComponent,
    ClienteubicacionComponent,
    RegistrodostrabajadorComponent,
    RegistrotrestrabajadorComponent,

    MenuComponent,
      IngresoTrabajadorComponent,
      PerfilTrabajadorComponent,
      ServiciosOfrecerComponent,
      WorkerProfileComponent,
      ChatComponent,
      DashboardComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule, 
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
