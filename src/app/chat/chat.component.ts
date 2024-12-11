import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../services/chat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  workerId: string | null = null;
  workerName = 'Trabajador'; // Esto puede venir de un servicio dinámico
  messages: { user: string; text: string }[] = [];
  newMessage = '';

  constructor(private route: ActivatedRoute, private chatService: ChatService) {}

  ngOnInit() {
    this.workerId = this.route.snapshot.paramMap.get('id');
    if (this.workerId) {
      this.messages = this.chatService.getMessages(this.workerId);
      this.workerName = `Trabajador ${this.workerId}`; // Solo como ejemplo
    }
  }

  sendMessage() {
    if (this.workerId && this.newMessage.trim()) {
      this.chatService.sendMessage(this.workerId, 'Tú', this.newMessage);
      this.newMessage = '';
      this.messages = this.chatService.getMessages(this.workerId);
    }
  }
}