import { Component, Input, Output, EventEmitter} from '@angular/core';

import { personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../service/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {



  @Input() nuevo: personaje = {
    nombre: '',
    poder: 0,
  }; //Se inicializa el input por defecto

    constructor(private dbzService: dbzService){

    }
  // @Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length == 0) { return;}
    this.dbzService.agregarPersonaje(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
   
  }
}
