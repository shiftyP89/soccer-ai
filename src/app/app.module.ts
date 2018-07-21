import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SoccerFieldComponent } from './soccer-field/soccer-field.component';

import { SoccerFieldService } from './services/soccer-field/soccer-field.service';
import { SoccerFieldCellComponent } from './soccer-field/soccer-field-cell/soccer-field-cell.component';
import { CoreWorkerService } from './services/core-worker/core-worker.service';

@NgModule({
    declarations: [
        AppComponent,
        SoccerFieldComponent,
        SoccerFieldCellComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [ 
        SoccerFieldService,
        CoreWorkerService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
