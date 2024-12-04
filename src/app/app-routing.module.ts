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
import { ClienteUbicacionComponent } from './cliente-ubicacion/cliente-ubicacion.component';
import { IngresoClienteComponent } from './ingreso-cliente/ingreso-cliente.component';
import { TrabajaNosotrosComponent } from './trabaja-nosotros/trabaja-nosotros.component';



const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'buscar-servicios', component: BuscarServiciosComponent},
  { path: 'ofrecer-servicios', component: OfrecerServiciosComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'iniciotrabajador', component: IniciotrabajadorComponent},
  { path: 'registrotrabajador', component: RegistrotrabajadorComponent},
  { path: 'sobre-nosotros', component: SobreNosotrosComponent},
  { path: 'cliente-ubicacion', component: ClienteUbicacionComponent},
  { path: 'ingreso-cliente', component: IngresoClienteComponent},
  { path: 'trabaja-nosotros', component: TrabajaNosotrosComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
  
  
})
export class AppRoutingModule { }
