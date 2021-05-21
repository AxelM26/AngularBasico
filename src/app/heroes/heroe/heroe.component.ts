import { Component } from "@angular/core";


@Component({
    selector: 'heroe',
    templateUrl: 'heroe.component.html'
})


export class HeroeComponent{
    nombre: string = 'Spider-Man';
    edad: number = 30;
    get letraCapital() {
        return this.nombre.toUpperCase();
    } 
    mostrarNombre():string{
        return `El nombre del heroe es: ${this.nombre} - con la edad de ${this.edad} anios`
    }

    cambiarNombre() :void {
        this.nombre = 'Shazam'
    }
    cambiarEdad(): void{
        this.edad= 15;
    }
}