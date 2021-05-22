import { Component, Input, OnInit } from '@angular/core';
import { dbzService } from '../dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent  {

 @Input ('Datos') personajes :any[] = [];

 constructor(private dbzService: dbzService){}
}
