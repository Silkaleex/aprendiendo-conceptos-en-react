import { ESTADO } from "./level.enum1";

export class cont {
  nombre = "";
  apellidos = "";
  email = "";
  estados = ESTADO.DISPONIBLE;

  constructor(nombre, apellidos, email, estados) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
    this.estados = estados;
  }
}
