import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChatService } from '../services/chat/chat.service';
import { ActivatedRoute, Router } from '@angular/router';
import Cookies from 'js-cookie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {
logout() {
throw new Error('Method not implemented.');
}
  form!: FormGroup;
  roomId: string = "";// Este ID debe ser dinámico, extraído de la URL o contexto
  chatId: number = 0; // ID del chat para obtener los mensajes
  rolId:number = 0; // ID del rol para obtener los mensajes
  messages: any[] = [];
  showPopup: boolean = false; // Para mostrar el popup
  responseOptions: string[] = ['Aceptar', 'Rechazar', 'Modificar'];
  messageContent: string = ''; // Add this line

  constructor(private formBuilder: FormBuilder, private chatService: ChatService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      message: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]], // Asegúrate de que el precio sea un número válido
    });
    this.roomId = this.route.snapshot.paramMap.get('roomId')!;
    this.chatId = parseInt(this.chatService.getClientId() || Cookies.get('userId') || '');
    this.rolId = parseInt(this.chatService.getRolId() || Cookies.get('rolId') || '');
   
    this.loadMessages();  // Cargar mensajes al inicializar el componente


    this.route.paramMap.subscribe((params) => {
      this.roomId = params.get('roomId') || this.roomId;
  
      // Conectar al WebSocket
      this.chatService.connectToRoom(this.roomId).subscribe((message) => {
        console.log('Nuevo mensaje recibido:', message);
      });
    });

  }

 

  // Método para cargar los mensajes de un chat
  loadMessages(): void {
    this.chatService.getMessages().subscribe({
      next: (data) => {
        this.messages = data;
      },
      error: (error) => {
        console.log('Error al obtener los mensajes:', error);
      },
    });
  }

  

  // Enviar un mensaje al WebSocket
  sendMessage(): void {
    const messageContent = this.form.get('message')?.value.trim();
    if (messageContent) {
      this.chatService.sendMessageToRoom(this.roomId, messageContent);
      this.messages.push(messageContent);
      this.form.reset();  // Limpiar el formulario después de enviar
    }
  }


  // Obtener los mensajes actuales
  getMessages(): Observable<any[]> {
    return new Observable((observer) => {
      observer.next(this.messages);
      observer.complete();
    }); // Devuelve los mensajes como un Observable
  }


  // Método para enviar el precio al backend
  enviarPrecio(roomId: string, price: number) {
    this.chatService.sendPrice(roomId, price).subscribe(
      (response) => {
        console.log('Mensaje enviado:', response);
      },
      (error) => {
        console.error('Error al enviar el mensaje:', error);
      }
    );
  }

  // Método para manejar la respuesta del trabajador al precio
  handlePriceResponse(response: string): void {
    const priceResponse = {
      response: response,
      price: this.form.value.price, // El precio acordado
    };

    this.chatService.respondToPrice(this.roomId, priceResponse).subscribe({
      next: (data) => {
        console.log('Respuesta del trabajador:', data);
        this.showPopup = false; // Cerrar el popup
      },
      error: (error) => {
        console.log('Error al manejar la respuesta:', error);
      },
    });
  }

  public getMessageAlignment(): string {
    const rolId = this.rolId;
    // Verifica el rolId y devuelve la clase correspondiente
    if (rolId === 3) {  // Cliente
      return 'left';  // Clase CSS para alinear a la izquierda
    } else if (rolId === 2) {  // Trabajador
      return 'right';  // Clase CSS para alinear a la derecha
    }
    return '';  // Si no es ninguno de los dos, no se aplica alineación
  }


  //--------------------------------------------
  //PRECIO

  public isPopupOpen = false;  // Estado del popup
  public proposedPrice: number = 0;  // Precio propuesto
 
  // Obtiene el rol desde la cookie
  public getRolId(): string {
    console.log("Rol del usuario:", Cookies.get('rolId'));
    return Cookies.get('rolId') || '';  // Devuelve el rolId desde la cookie
  }

  // Función para abrir el popup
  public openPricePopup(): void {
    this.isPopupOpen = true;
  }

  // Función para cerrar el popup
  public closePopup(): void {
    this.isPopupOpen = false;
  }

  // Función para enviar el precio al trabajador (esto puede ir a un backend)
  public submitPrice(): void {
    if (this.proposedPrice <= 0) {
      alert('Por favor, introduce un precio válido');
      return;
    }

    const roomId = this.roomId; // Reemplaza esto con el ID de la sala correspondiente

    this.chatService.sendPrice(roomId, this.proposedPrice).subscribe(
      (response) => {
        console.log('Mensaje enviado:', response);
        this.closePopup();
      },
      (error) => {
        console.error('Error al enviar el mensaje:', error);
      }
    );
  }
}