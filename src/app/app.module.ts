import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SoccerFieldComponent } from './soccer-field/soccer-field.component';

import { SoccerFieldService } from './soccer-field.service';
import { SoccerFieldCellComponent } from './soccer-field/soccer-field-cell/soccer-field-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    SoccerFieldComponent,
    SoccerFieldCellComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ SoccerFieldService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
