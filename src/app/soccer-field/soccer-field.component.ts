import { Component, OnInit, Input } from '@angular/core';
import { SoccerFieldService, SoccerField } from '../soccer-field.service';

@Component({
    selector: 'app-soccer-field',
    templateUrl: './soccer-field.component.html',
    styleUrls: ['./soccer-field.component.css']
})
export class SoccerFieldComponent implements OnInit {

    @Input() public soccerField: SoccerField;

    constructor() { }

    ngOnInit() {
        console.log(this.soccerField);
    }

}
