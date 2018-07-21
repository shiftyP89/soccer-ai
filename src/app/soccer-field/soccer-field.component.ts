import { Component, OnInit, Input } from '@angular/core';
import { SoccerFieldService, SoccerField } from '../services/soccer-field/soccer-field.service';

@Component({
    selector: 'soccer-field',
    templateUrl: './soccer-field.component.html',
    styleUrls: ['./soccer-field.component.scss']
})
export class SoccerFieldComponent implements OnInit {

    @Input() public soccerField: SoccerField;

    constructor() { }

    ngOnInit() {
        console.log(this.soccerField);
    }

}
