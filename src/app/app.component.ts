import { Component } from '@angular/core';
import { SoccerFieldService, SoccerField, GrassStatus } from './services/soccer-field/soccer-field.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    public soccerField: SoccerField;
    public workerThread: Worker;

    constructor(private soccerFieldService: SoccerFieldService){

    }

    ngOnInit(){
        const grassInitialStatus: GrassStatus = 'Default';
        this.soccerFieldService.buildInitialSoccerField(grassInitialStatus);
        this.soccerField = this.soccerFieldService.getSoccerField();

    }
}
