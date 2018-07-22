import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SoccerFieldService, SoccerField, GrassStatus } from './services/soccer-field/soccer-field.service';
import { CoreWorkerService } from './services/core-worker/core-worker.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    
    public soccerField: SoccerField;
    public workerThread: Worker;

    constructor(public soccerFieldService: SoccerFieldService,
                private coreWorkerService: CoreWorkerService,
                private ref: ChangeDetectorRef){}

    ngOnInit(){
        const grassInitialStatus: GrassStatus = 'Default';
        this.soccerFieldService.buildInitialSoccerField(grassInitialStatus);
        this.soccerField = this.soccerFieldService.getSoccerField();

        this.soccerFieldService.changesStream$.subscribe(() => {
            this.ref.markForCheck();
        });

        this.coreWorkerService.simulateBallMovement();
    }
}
