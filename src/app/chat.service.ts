import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private socket: Socket) { }
}

public sendMsg(message) {
    this.socket.emit('new-message', message);
}

public getMessages = () => {
    return Observable.create((observer) => {
            this.socket.on('new-message', (Message) => {
                observer.next(Message);
            });
    });
}