import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../../node_modules/rxjs';

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

export type BallPosition = {
    primary: number,
    secondary: number,
}

@Injectable({
  providedIn: 'root'
})
export class SoccerFieldService {

    private soccerField: SoccerField;
    private primaryAxisLength: number = 60; // WIDTH
    private secondaryAxisLength: number = 100; // LENGTH

    private ballPosition: BallPosition;

    public changesStream$: BehaviorSubject<SoccerField> = new BehaviorSubject<SoccerField>(this.soccerField);

    constructor() { 
    }

    /**
     * Inicializa el terreno de juego
     * @param initalGrassStatus 
     */
    public buildInitialSoccerField(initalGrassStatus: GrassStatus, lenght: number = this.secondaryAxisLength, width: number = this.primaryAxisLength){
        const primaryAxis: SoccerFieldCell[][] = [];
        for(let i = 0; i < width; ++i) {
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

        this.soccerField.field[width/2][lenght/2].content = {
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

        this.ballPosition = {
            primary: width/2,
            secondary: lenght/2,
        }

        this.primaryAxisLength = width;
        this.secondaryAxisLength = lenght;
    }

    /**
     * Moves the ball speedX positions in every axis.
     * @param dirP 
     * @param dirS 
     * @param speedP 
     * @param speedS 
     */
    public moveBall(dirP: 1 | -1, dirS: 1 | -1, speedP, speedS) {
        console.log('Moving ball: ', dirP*speedP, dirS*speedS);
        
        if(speedP > 0 || speedS > 0) {
            // Remove it from its current position
            const currentBallCell = this.soccerField.field[this.ballPosition.primary][this.ballPosition.secondary];
            if(Array.isArray(currentBallCell.content)) {
                for(const contentIdx in currentBallCell.content) {
                    if(currentBallCell.content[contentIdx].type === 'Ball') delete currentBallCell.content[contentIdx];
                }
            }
            else {
                currentBallCell.content = null;
            }

            // And move it to its new position
            this.ballPosition.primary += speedP*dirP;
            if(this.ballPosition.primary >= this.primaryAxisLength) {
                console.log('Ball out of bounds!');
                this.resetBallPosition();
            }
            else {
                this.ballPosition.secondary += speedS*dirS;
                if(this.ballPosition.secondary >= this.secondaryAxisLength) {
                    console.log('Ball out of bounds!');
                    this.resetBallPosition();
                }
                else {
                    this.moveBallToCell(this.ballPosition.primary, this.ballPosition.secondary);
                }
            }
        }
        console.log('New ball position', this.ballPosition);
    }

    /**
     * Resets ball position to center of the field
     */
    private resetBallPosition() {
        this.ballPosition.primary = this.primaryAxisLength/2;
        this.ballPosition.secondary = this.secondaryAxisLength/2;

        this.moveBallToCell(this.ballPosition.primary, this.ballPosition.secondary);
    }

    /**
     * Moves the ball to a certain given cell coordinates. Cell coordinates must be valid.
     * @param primary 
     * @param secondary 
     */
    private moveBallToCell(primary, secondary){
        const newBallCell = this.soccerField.field[primary][secondary];
        if(Array.isArray(newBallCell.content)) {
            newBallCell.content.push({
                type: 'Ball',
            })
        }
        else {
            newBallCell.content = {
                type: 'Ball',
            };
        }
    }

    public triggerOnChangeListener(){
        this.changesStream$.next(this.soccerField);
    }

    public getSoccerField(): SoccerField {
        return this.soccerField;
    }
}
