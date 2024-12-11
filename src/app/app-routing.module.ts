import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { BuscarServiciosComponent } from './buscar-servicios/buscar-servicios.component';
import { OfrecerServiciosComponent } from './ofrecer-servicios/ofrecer-servicios.component';
import { FooterComponent } from './footer/footer.component'
import { IniciotrabajadorComponent } from './iniciotrabajador/iniciotrabajador.component';
import { RegistrotrabajadorComponent } from './registrotrabajador/registrotrabajador.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { IngresoClienteComponent } from './ingreso-cliente/ingreso-cliente.component';
import { TrabajaNosotrosComponent } from './trabaja-nosotros/trabaja-nosotros.component';
import { ClienteubicacionComponent } from './clienteubicacion/clienteubicacion.component';
import { RegistrodostrabajadorComponent } from './registrodostrabajador/registrodostrabajador.component';
import { RegistrotrestrabajadorComponent } from './registrotrestrabajador/registrotrestrabajador.component';

import { MenuComponent } from './menu/menu.component';
import { IngresoTrabajadorComponent } from './ingreso-trabajador/ingreso-trabajador.component';
import { ServiciosOfrecerComponent } from './servicios-ofrecer/servicios-ofrecer.component';
import { WorkerProfileComponent } from './worker-profile/worker-profile.component';
import { ChatComponent } from './chat/chat.component';
import { PerfilTrabajadorComponent } from './perfil-trabajador/perfil-trabajador.component';



const routes: Routes = [

  { path: 'Home', component: HomeComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'buscar-servicios', component: BuscarServiciosComponent},
  { path: 'ofrecer-servicios', component: OfrecerServiciosComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'iniciotrabajador', component: IniciotrabajadorComponent},
  { path: 'registrotrabajador', component: RegistrotrabajadorComponent},
  { path: 'sobre-nosotros', component: SobreNosotrosComponent},
  { path: 'ingreso-cliente', component: IngresoClienteComponent},
  { path: 'trabaja-nosotros', component: TrabajaNosotrosComponent},
  { path: 'clienteubicacion', component: ClienteubicacionComponent},
  { path: 'registrodostrabajador', component: RegistrodostrabajadorComponent},
  { path: 'registrotrestrabajador', component: RegistrotrestrabajadorComponent},
  { path: 'ingreso-trabajador', component: IngresoTrabajadorComponent},
  
  { path: 'menu', component: MenuComponent},
  { path: 'servicios-ofrecer', component: ServiciosOfrecerComponent},
  { path: 'worker/:id', component: WorkerProfileComponent },
  { path: 'chat/:id', component: ChatComponent },
  { path: 'perfil-trabajador', component: PerfilTrabajadorComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
  
  
})
export class AppRoutingModule { }
