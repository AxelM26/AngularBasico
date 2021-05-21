import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[] = ['Spider-Man', 'IronMan', 'Hulk', 'Thor','Venom'];
  heroeBorrado: string = '';
  borrarHeroe(){
   this.heroeBorrado = this.heroes.shift() || '';
   console.log(this.heroeBorrado.length)
  }

}
