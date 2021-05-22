import { Component, Input, Output, EventEmitter} from '@angular/core';

import { personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {



  @Input() nuevo: personaje = {
    nombre: '',
    poder: 0,
  }; //Se inicializa el input por defecto

  @Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length == 0) { return;}
    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
   
  }
}
