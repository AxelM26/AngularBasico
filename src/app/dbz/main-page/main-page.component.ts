import { Component, Input, OnInit } from '@angular/core';

import { personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';
import { dbzService } from '../service/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
 
  nuevo : personaje ={
    nombre: "Maestro Roshi",
    poder: 14000
  }


  agregarNuevoPersonaje(argumento: personaje){
    // this.personajes.push(argumento);
  }
constructor(private dbzService: dbzService){
  
}
  
}
