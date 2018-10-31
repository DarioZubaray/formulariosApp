import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid crimson;
      }
      .radiobotones{
        margin: 6px;
      }
    `]
})
export class TemplateComponent {

  usuario: object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: "0",
    sexo: null
  };

  paises: object = [
    {codigo: "ARG", nombre: "Argentina"},
    {codigo: "CRI", nombre: "Costa Rica"},
    {codigo: "ESP", nombre: "España"},
    {codigo: "USA", nombre: "Estados Unidos"}
  ]
  constructor() { }

  guardar( formulario: NgForm) {
    console.log("Formulario posteado!");
    console.log("ngForm", formulario);
    console.log("formulario", formulario.value);
    console.log("usuario", this.usuario);
  }

}
