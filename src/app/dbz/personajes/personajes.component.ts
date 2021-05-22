import { Component, Input, OnInit } from '@angular/core';
import { dbzService } from '../service/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent  {

//  @Input ('Datos') personajes :any[] = [];

  get personajes(){
    return this.dbzService.personajes;
  }

 constructor(private dbzService: dbzService){}
}
