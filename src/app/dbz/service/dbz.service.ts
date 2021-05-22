import { Injectable } from "@angular/core";
import { personaje } from '../interfaces/dbz.interface';

@Injectable()

export class dbzService{
    //Se hizo privada para solo usarla en este modulo
    private _personajes: personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000,
        },
        {
          nombre: 'Vegeta',
          poder: 7500,
        },
      ];
      get personajes(): personaje[] {
          return [...this._personajes]; // Operador Spread
      }
    constructor(){}

    agregarPersonaje(argumento: personaje){
        this._personajes.push(argumento);
    }
}