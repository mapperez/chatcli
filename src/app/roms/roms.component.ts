import { Component, OnInit } from "@angular/core";
import * as io from "socket.io-client";
import { LocalStorageService } from "angular-2-local-storage";

// Modelos
import { Rom } from "../models/rom";
import { Chat } from "../models/chat";

@Component({
  selector: "app-roms",
  templateUrl: "./roms.component.html",
  styleUrls: ["./roms.component.css"]
})
export class RomsComponent implements OnInit {
  messageText: string;
  roms: Array<Rom>;
  socket: SocketIOClient.Socket;
  romActual: Rom;
  menucli: string;
  mensaje: string;

  constructor(private localstr: LocalStorageService) {
    this.socket = io.connect("https://apiwsp.herokuapp.com");
    this.romActual = new Rom();
    this.menucli = "";
    this.roms = new Array();
    this.mensaje = "";

    this.socket.on("sendClientNew", (msg: any) => {
      this.roms = [];

      msg.forEach(r => {
        this.roms.push({
          _id: r._id,
          chatId: r.chatId,
          fecha: r.fecha,
          open: r.open,
          mensajes: r.mensajes,
          cliente: r.cliente
        });
      });

      this.localstr.set("roms", this.roms);
    });

    this.socket.on("sendClientMensaje", (msg: any) => {
      console.log("Captura mensaje enviado por cliente");
      // Actualizar mensaje al cliente especifico
      this.roms = [];

      msg.forEach(r => {
        this.roms.push({
          _id: r._id,
          chatId: r.chatId,
          fecha: r.fecha,
          open: r.open,
          mensajes: r.mensajes,
          cliente: r.cliente
        });

        if (this.romActual._id === r._id) {
          this.romActual.mensajes = r.mensajes;
          this.localstr.set("romActual", this.romActual);
        }
      });
    });
  }

  ngOnInit(): void {
    const romx: Array<Rom> = this.localstr.get("roms");
    const romAct: Rom = this.localstr.get("romActual");

    if (romAct) {
      this.romActual = romAct;
    }
    if (romx) {
      this.roms = romx;
    }
  }

  btn_selcliente(item) {
    this.romActual = item;

    this.romActual = {
      _id: item._id,
      chatId: item.chatId,
      fecha: item.fecha,
      open: item.open,
      mensajes: item.mensajes,
      cliente: item.cliente
    };

    this.localstr.set("romActual", this.romActual);
  }

  action_menu_btn() {
    if (this.menucli.length === 0) {
      this.menucli = "block";
    } else {
      this.menucli = "";
    }
  }

  btn_send_mesage() {
    const data = {
      phone: this.romActual.chatId.replace("@c.us", ""),
      body: this.mensaje
    };
    this.socket.emit("sendClienteWsp", data);
  }
}
