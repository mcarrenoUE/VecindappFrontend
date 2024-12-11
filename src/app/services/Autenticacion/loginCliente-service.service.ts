import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Cookies from 'js-cookie';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginClienteServiceService {

  private URL_API: string = 'http://localhost:8080/'; // Cambia a tu URL de backend

  constructor(private http: HttpClient) {}

  login(user: string, pwd: string): Observable<any> {
    const cred = { user, pwd };
    return this.http.post<{ token: string /*,userId: number*/ }>(`${this.URL_API}login-cliente`, cred).pipe(
        tap(response => {
            console.log('Respuesta del backend:', response);
            // Guardar token y userId en cookies
            Cookies.set('token', response.token, { expires: 1 });
            //Cookies.set('userId', response.userId.toString(), { expires: 1 });
        })
    );
}

  // Almacenar el token en la cookie
  storeTokenInCookie(token: string): void {
    Cookies.set('token', token, { expires: 1, path: '/' });
    console.log('Token guardado en la cookie');
    console.log('Token:', token);
  }

  /*
  // Almacenar el clientId en la cookie
  saveClientIdInCookie(userId: string): void {
    Cookies.set('clientId', userId, { expires: 7 }); // 7 días de expiración
    console.log('ClientId guardado en la cookie');
    console.log('ClientId:', userId);
  }
*/

  // Obtener el token de la cookie
  getTokenFromCookie(): string | undefined {
    const token = Cookies.get('token');
    console.log('Token en la cookie:', token);
    return token;
  }

/*
  // Obtener el clientId de la cookie
  getClientId(): number | undefined {
    const userId = Cookies.get('userId');
    console.log('ClientId en la cookie:', userId);
    return userId ? parseInt(userId, 10) : undefined;
  }
  */

  checkUserExistenceWithGoogle(idToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${idToken}`
    });
    return this.http.post<any>(`${this.URL_API}/check-user-google`, {}, { headers }).pipe(
      tap(response => {
        console.log('Respuesta del backend al verificar usuario:', response);
      })
    );
  }

  checkUserByEmail(email: string): Observable<any> {
    return this.http.post<any>(`${this.URL_API}check-user-by-email`, email);
  }
  
}
