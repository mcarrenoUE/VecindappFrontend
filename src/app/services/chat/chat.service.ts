import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public getClientId(): string {
    return Cookies.get('userId') || ''; // Devuelve el clientId desde la cookie
  }

  public getRolId(): string {
    return Cookies.get('rolId') || ''; // Devuelve el clientId desde la cookie
  }

  private stompClient: any;
  private apiUrl = 'http://localhost:8080'; // Cambiar a la URL de tu backend
  private chatMessages = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {}


  // Conectar al WebSocket con la sala
  connectToRoom(roomId: string): Observable<any> {
    const socket = new SockJS(`http://localhost:8080/chat-socket`);
    this.stompClient = Stomp.over(socket);

    return new Observable((observer) => {
      this.stompClient.connect({}, (frame: string) => {
        console.log('Conectado al WebSocket: ' + frame);
        this.stompClient.subscribe(`/topic/room/${roomId}`, (message: any) => {
          const newMessage = JSON.parse(message.body);
          this.chatMessages.next([...this.chatMessages.getValue(), newMessage]); // Agregar el nuevo mensaje al BehaviorSubject
          observer.next(newMessage); // Emitir el nuevo mensaje
        });
      });
    });
  }


    // Enviar un mensaje al WebSocket
  sendMessageToRoom(roomId: string, contenido: string): void {
    const chatId = this.getClientId();
    if (!chatId) {
      console.error('No se encontró el chatId.');
      return;
    }
  
    if (this.stompClient && this.stompClient.connected) {
      const message = { contenido: contenido, chatId: chatId };
      this.stompClient.send(`/app/chat/${roomId}/send`, {}, JSON.stringify(message));
      console.log(`Mensaje enviado a la sala ${roomId}: ${contenido}`);
    } else {
      console.error('No se pudo enviar el mensaje: WebSocket no está conectado.');
    }
  }


   // Método para enviar un mensaje
   sendPrice(roomId: string, price: number): Observable<any> {
    const message = { price, esSolicitudPrecio: true };  // Aquí se define la estructura del mensaje
    this.stompClient.send(`/app/chat/${roomId}/priceResponse`, {}, JSON.stringify(message));
    return new Observable((observer) => {
      observer.next(message);
      observer.complete();
    });
  }

  // Método para que el trabajador responda a la oferta de precio
  respondToPrice(roomId: string, priceResponse: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/chat/${roomId}/priceResponses`, priceResponse);
  }

  // Obtener los mensajes de un chat
   // Obtener los mensajes desde el BehaviorSubject
   getMessages(): Observable<any[]> {
    return this.chatMessages.asObservable(); // Retornar los mensajes como un Observable
  }

   // Obtener la lista de servicios
 /*   getServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/servicio/list`);
  } */

 // Crear un nuevo chat con el clienteId, workerId y serviceId
 createChat(clientId: string, workerId: string, serviceId: string): Observable<any> {
  // Convertir los valores a números si es necesario
  const usuarioId = parseInt(clientId, 10);
  const trabajadorId = parseInt(workerId, 10);
  const servicioId = parseInt(serviceId, 10);

  // Crear el objeto con los datos
  const body = {
    usuarioId: usuarioId,
    trabajadorId: trabajadorId,
    servicioId: 1
  };

  // Mostrar el objeto que se enviará
  console.log('Enviando al backend:', body);

  // Hacer la solicitud al backend
  return this.http.post<any>(`http://localhost:8080/chats/insert`, body);
} 





}
