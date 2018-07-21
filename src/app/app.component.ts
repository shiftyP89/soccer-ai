import { Component } from '@angular/core';
import { SoccerFieldService, SoccerField, GrassStatus } from './soccer-field.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    public soccerField: SoccerField;

    constructor(private soccerFieldService: SoccerFieldService){

    }

    ngOnInit(){
        const grassInitialStatus: GrassStatus = 'Default';
        this.soccerFieldService.buildInitialSoccerField(grassInitialStatus);
        this.soccerField = this.soccerFieldService.getSoccerField();
    }

}
