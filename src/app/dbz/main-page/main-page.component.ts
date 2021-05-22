import { Component, Input, OnInit } from '@angular/core';

import { personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';
import { dbzService } from '../dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];
  nuevo : personaje ={
    nombre: "Maestro Roshi",
    poder: 14000
  }// Valor predeterminado en los inputs

  agregarNuevoPersonaje(argumento: personaje){
    this.personajes.push(argumento);
  }
constructor(private dbzService: dbzService){}

}
