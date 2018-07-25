import { Injectable } from '@angular/core';
import { SoccerFieldService } from '../soccer-field/soccer-field.service';

@Injectable({
    providedIn: 'root'
})
export class CoreWorkerService {

    private secondsPerHalf: number = 45*60; //45*60

    constructor(private soccerFieldService: SoccerFieldService) { }

    public async simulateBallMovement() {
        for(let i = 0; i < this.secondsPerHalf; ++i) {
            const dirP = this.generateRandomInt(0, 1)==0 ? 1 : -1;
            const dirS = this.generateRandomInt(0, 1)==0 ? 1 : -1;
            const speedP = this.generateRandomInt(0, 99)%2;
            const speedS = this.generateRandomInt(0, 99)%2;

            //this.soccerFieldService.moveBall(dirP, dirS, speedP, speedS);
            this.soccerFieldService.moveBall(1, 1, 0, 1);
            this.soccerFieldService.triggerOnChangeListener();
            await this.delay(200);
        }
    }

    private generateRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}
