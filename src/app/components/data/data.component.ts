import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma : FormGroup;
  usuario: Object = {
    'nombreCompleto': {
      'nombre': 'Dario',
      'apellido': 'Zubaray'
    },
    'correo': 'dzubaray@gmail.com',
    'pasatiempos': ['Correr']
  }

  constructor() {
    console.log("Usuario: " + this.usuario);

    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl( '', [
          Validators.required,
          Validators.minLength(3)]
        ),
        'apellido': new FormControl( '', [
          Validators.required,
          this.noHerrera
        ])
      }),
      'correo': new FormControl( '', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'pasatiempos': new FormArray([
        new FormControl('', Validators.required)
      ])
    });

    this.forma.setValue( this.usuario );
  }

  ngOnInit() {
  }

  guardarCambios(){
    console.log( this.forma.value );
    console.log( this.forma );

    this.forma.reset({
      nombreCompleto: {
        nombre: "",
        apellido: ""
      },
      correo: ""
    });
  }

  noHerrera( control: FormControl ): { [s:string]: boolean } {

    if( control.value === 'herrera' ) {
      return {
        noHerrera: true
      }
    }
    return null;
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('Dormir', Validators.required)
    );
  }
}
