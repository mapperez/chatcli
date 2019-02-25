import { Cliente } from './cliente';
import { Chat } from './chat';
export class Rom {
  _id?: string;
  chatId: string;
  fecha: string;
  open: string;
  mensajes: Array<Chat>;
  cliente: Cliente;

  constructor() {
    this.chatId = '';
    this.fecha = '';
    this.open = '';
    this.mensajes = [];
    this.cliente = new Cliente();
  }
}
