import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'
import { Observable } from  'rxjs/Rx';

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
      ]),
      'username': new FormControl('', Validators.required, this.exiteUsuario),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });

    this.forma.controls['password2'].setValidators([
      Validators.required, this.noIgual.bind( this.forma )
    ]);

    // this.forma.setValue( this.usuario );
  }

  ngOnInit() {
  }

  guardarCambios(){
    console.log( this.forma.value );
    console.log( this.forma );

    // this.forma.reset({
    //   nombreCompleto: {
    //     nombre: "",
    //     apellido: ""
    //   },
    //   correo: ""
    // });
  }

  noIgual( control: FormControl ): { [s:string]: boolean } {

    let forma: any = this;

    if( control.value !== forma.controls['password1'].value ) {
      return {
        noiguales: true
      }
    }
    return null;
  }

  exiteUsuario( control: FormControl ): Promise<any>|Observable<any> {
    let promesa = new Promise(
      ( resolve, reject )=>{
        setTimeout( ()=>{
          if( control.value === 'tunick' ) {
            resolve( { existe:true } )
          } else {
            resolve( null );
          }
        }, 3000)
      }
    );
    return promesa;
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
