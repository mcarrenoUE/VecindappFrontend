import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelCrearUser } from '../../models/CrearUsuario/model-crear-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroClienteService {

  private URL_API = 'http://localhost:8080/'; 

  constructor(private http: HttpClient) { }

  registarcliente(crear:ModelCrearUser):Observable<any>{
    return this.http.post(`${this.URL_API}cliente/add`, ModelCrearUser);
  }
}
