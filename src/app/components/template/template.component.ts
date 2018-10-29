import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
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
    console.log(formulario.value);
  }

}
