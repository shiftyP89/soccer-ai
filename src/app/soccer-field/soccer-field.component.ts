import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, NgZone } from '@angular/core';
import { SoccerFieldService, SoccerField } from '../services/soccer-field/soccer-field.service';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Component({
    selector: 'soccer-field',
    templateUrl: './soccer-field.component.html',
    styleUrls: ['./soccer-field.component.scss']
    //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoccerFieldComponent implements OnInit {

    @Input() public soccerField: SoccerField;
    @Input() private changesStreamObs: BehaviorSubject<any>;

    constructor(/*private ref: ChangeDetectorRef,
                private zone: NgZone,*/
                private soccerFieldService: SoccerFieldService) { }

    ngOnInit() {
        this.changesStreamObs.subscribe(() => {
            console.log('Changes callback');
        });
    }

    ngOnChanges(changes){
        console.log('changes detected!', changes);
    }
}
