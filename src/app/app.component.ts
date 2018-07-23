import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SoccerFieldService, SoccerField, GrassStatus } from './services/soccer-field/soccer-field.service';
import { CoreWorkerService } from './services/core-worker/core-worker.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    
    public soccerField: SoccerField;

    constructor(public soccerFieldService: SoccerFieldService,
                private coreWorkerService: CoreWorkerService
            ){}

    ngOnInit(){
        const grassInitialStatus: GrassStatus = 'Default';
        this.soccerFieldService.buildInitialSoccerField(grassInitialStatus);
        this.soccerField = this.soccerFieldService.getSoccerField();

        this.coreWorkerService.simulateBallMovement();
    }
}
