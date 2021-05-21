import { Component } from "@angular/core";

@Component({
    selector: 'contador',
    template: `
    <h1>{{titulo}}</h1> 
    
    <h3>La base del acumulador es: <strong> {{base}}</strong></h3>

    <button (click) = "acumulador(base);" > + {{base}} </button>

    <span>{{numero}}</span>

    <button (click) = "acumulador(-base);" > - {{base}} </button>
    
    `
})

export class contadorComponent{
    public titulo: string = 'Contador App';
    numero : number = 10;
    base: number = 5;
    acumulador(valor:number){
      this.numero += valor; 
    }
    
}