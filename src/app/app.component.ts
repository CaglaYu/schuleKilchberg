import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'schuleKilchberg';
  msgList=[];
  userName="Ekin";
  newMsg:string;
  
  constructor(private chatService: ChatService) {
    this.newMsg="";
  }

  sendMsg() {
    this.chatService.sendMsg(this.newMsg);
    this.newMsg = '';
  }
  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.msgList.push(this.newMsg);
      });
  }
  

}


