import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { heroesModule } from './heroes/heroes.module';
import { contadorModule } from './Contador/contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

import { dbzService } from './dbz/dbz.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    heroesModule,
    contadorModule,
    DbzModule
  ],
  providers: [dbzService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }