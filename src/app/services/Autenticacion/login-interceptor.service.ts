import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginClienteServiceService } from './loginCliente-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginInterceptorService {

  constructor(private loginService: LoginClienteServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const sessionID = this.loginService.getTokenFromCookie(); // Obtener el token de la cookie
    if (sessionID) {
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${sessionID}`
        }
      });
      return next.handle(clonedRequest); // Enviar la solicitud con el token
    }
    return next.handle(request); // Si no hay token, enviamos la solicitud sin modificar
  }
}
