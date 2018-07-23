import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'soccer-field',
    templateUrl: './soccer-field.component.html',
    styleUrls: ['./soccer-field.component.scss']
})
export class SoccerFieldComponent implements OnInit {

    @Input() public soccerFieldStream$: BehaviorSubject<any>;

    //public testStream: Observable<any>;

    constructor() { }

    ngOnInit() {
        //this.testStream = this.soccerFieldStream.pipe(tap(() => console.log('nuevos datos')));
    }

    trackCell(index, cell) {
        return cell ? cell.id : undefined;
    }

    trackRow(index, row) {
        return index;
    }
}
