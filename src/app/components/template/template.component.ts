import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid crimson;
      }
    `]
})
export class TemplateComponent {

  usuario: object = {
    nombre: "Dario",
    apellido: "Zubaray",
    email: "dzubaray@gmail.com"
  };
  constructor() { }

  guardar( formulario: NgForm) {
    console.log("Formulario posteado!");
    console.log("ngForm", formulario);
    console.log("formulario", formulario.value);
    console.log("usuario", this.usuario);
  }

}
