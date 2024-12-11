import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private messages: { [workerId: string]: { user: string; text: string }[] } = {};

  getMessages(workerId: string) {
    return this.messages[workerId] || [];
  }

  sendMessage(workerId: string, user: string, text: string) {
    if (!this.messages[workerId]) {
      this.messages[workerId] = [];
    }
    this.messages[workerId].push({ user, text });
  }
}
