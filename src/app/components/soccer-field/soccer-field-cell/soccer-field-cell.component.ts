import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { SoccerFieldCell, GrassStatus, Content } from '../../../services/soccer-field/soccer-field.service';

@Component({
    selector: 'soccer-field-cell',
    templateUrl: './soccer-field-cell.component.html',
    styleUrls: ['./soccer-field-cell.component.scss']
})
export class SoccerFieldCellComponent implements OnInit, OnChanges {

    @Input() public grassStatus: GrassStatus;
    @Input() public id: string;
    @Input() public content: Content | Content[];

    public fieldCell: SoccerFieldCell;
    public containsP1: boolean = false;
    public containsP2: boolean = false;
    public containsBall: boolean = false;

    public p1: Content = null;
    public p2: Content = null;

    constructor() {
     }

     ngOnInit(){

     }

    ngOnChanges() {
        this.containsBall = this.containsP1 = this.containsP2 = false;

        this.fieldCell = {
            id: this.id,
            grassStatus: this.grassStatus,
            content: this.content,
        }

        console.log(`Contenido ${this.id} --> `, JSON.stringify(this.content));

        if(this.fieldCell.content) {
            if(Array.isArray(this.fieldCell.content)){
                for(const content of this.fieldCell.content) {
                    if(content.type === 'Ball') this.containsBall = true;
                    else if(!this.containsP1) {
                        this.containsP1 = true;
                        this.p1 = content;
                    }
                    else {
                        this.containsP2 = true;
                        this.p2 = content;
                    }
                }
            }
            else {
                if(this.fieldCell.content.type === 'Ball') this.containsBall = true;
                else {
                    this.containsP1 = true;
                    this.p1 = this.fieldCell.content;
                }
            }
        }
    }

}
