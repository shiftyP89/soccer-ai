import { Injectable } from '@angular/core';

export type SoccerField = {
    field: SoccerFieldCell[][],
    grassGeneralStatus: GrassStatus
}

export type SoccerFieldCell = {
    id: string,
    grassStatus: GrassStatus,
    content: Content | Content[],
};

export type GrassStatus = 'Default' | 'Wet' | 'Soaked' | 'Damaged' | 'Dry';

export type Content = {
    type: 'Ball' | 'Player',
    info?: PlayerInfo,
    attributes?: PlayerAttributes,
};

export type PlayerAttributes = {
    quality: number
};

export type PlayerInfo = {
    id: string,
    number: number,
    name: string,
};

@Injectable({
  providedIn: 'root'
})
export class SoccerFieldService {

    private soccerField: SoccerField;
    private LENGTH: number = 90;
    private WITDH: number = 60;

    constructor() { 
    }

    /**
     * Inicializa el terreno de juego
     * @param initalGrassStatus 
     */
    public buildInitialSoccerField(initalGrassStatus: GrassStatus, lenght: number = this.LENGTH, witdh: number = this.WITDH){
        const primaryAxis: SoccerFieldCell[][] = [];
        for(let i = 0; i < lenght; ++i) {
            const currentSecondayAxis: SoccerFieldCell[] = [];
            for(let j = 0; j < witdh; ++j){
                const currentFieldCell: SoccerFieldCell = {
                    id: i+':'+j,
                    grassStatus: initalGrassStatus,
                    content: null,
                }
                currentSecondayAxis.push(currentFieldCell);
            }
            primaryAxis.push(currentSecondayAxis);
        }

        this.soccerField = {
            field:  primaryAxis,
            grassGeneralStatus: initalGrassStatus,
        }

        this.soccerField.field[lenght/2][witdh/2].content = {
            type: 'Ball',
        };
    }

    public getSoccerField(): SoccerField {
        return this.soccerField;
    }
}
