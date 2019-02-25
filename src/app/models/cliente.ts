export class Cliente {
  _id?: string;
  rut: string;
  nombre: string;
  apellido: string;
  correos: Array<string>;
  telefonos: Array<string>;
  direcciones: Array<string>;
  cod_region: string;
  provincia: string;
  ciudad: string;
  clasificacionFinanciera: string;
  tipoCartera: string;
  clasificacion: string;
  condicionPago: string;
  credito: string;
  creditoUtilizado: string;
  formaPago: string;
  giros: string;
  segmento: string;
  subSegmento: string;

  constructor() {
    this.rut = '';
    this.nombre = '';
    this.apellido = '';
    this.correos = [];
    this.telefonos = [];
    this.direcciones = [];
    this.cod_region = '';
    this.provincia = '';
    this.ciudad = '';
    this.clasificacionFinanciera = '';
    this.tipoCartera = '';
    this.clasificacion = '';
    this.condicionPago = '';
    this.credito = '';
    this.creditoUtilizado = '';
    this.formaPago = '';
    this.giros = '';
    this.segmento = '';
    this.subSegmento = '';
  }
}
