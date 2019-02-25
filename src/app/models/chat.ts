import { Cliente } from './cliente';

export class Chat {
  _id?: string;
  id: string;
  body: string;
  fromMe: string;
  author: string;
  time: string;
  chatId: string;
  messageNumber: string;
  type: string;
  senderName: string;
  chatName: string;
  cliente: Cliente;

  constructor() {
    this.id = '';
    this.body = '';
    this.fromMe = '';
    this.author = '';
    this.time = '';
    this.chatId = '';
    this.messageNumber = '';
    this.type = '';
    this.senderName = '';
    this.chatName = '';
    this.cliente = new Cliente();
  }
}
