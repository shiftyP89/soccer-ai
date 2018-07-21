import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SoccerFieldComponent } from './soccer-field/soccer-field.component';

import { SoccerFieldService } from './soccer-field.service';

@NgModule({
  declarations: [
    AppComponent,
    SoccerFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ SoccerFieldService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
