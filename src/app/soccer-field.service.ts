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
    team?: 'H' | 'A'
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
    private LENGTH: number = 100;
    private WITDH: number = 60;

    constructor() { 
    }

    /**
     * Inicializa el terreno de juego
     * @param initalGrassStatus 
     */
    public buildInitialSoccerField(initalGrassStatus: GrassStatus, lenght: number = this.LENGTH, witdh: number = this.WITDH){
        const primaryAxis: SoccerFieldCell[][] = [];
        for(let i = 0; i < witdh; ++i) {
            const currentSecondayAxis: SoccerFieldCell[] = [];
            for(let j = 0; j < lenght; ++j){
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

        this.soccerField.field[witdh/2][lenght/2].content = {
            type: 'Ball',
        };
        this.soccerField.field[30][25].content = {
            type: 'Player',
            team: 'H',
        };
        this.soccerField.field[30][75].content = {
            type: 'Player',
            team: 'A',
        };
    }

    public getSoccerField(): SoccerField {
        return this.soccerField;
    }
}
