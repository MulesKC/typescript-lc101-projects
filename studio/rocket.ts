import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    massKg: number;


    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let total: number = 0;

        for (let i=0; i < items.length; i++) {
            total += items[i].massKg;
        }

        return total;

    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean {
        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);
    }

    addCargo(cargo: Cargo): boolean {
        let cargoResponse: boolean = this.canAdd(cargo);

        if (cargoResponse) { 
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut) {
        let astroResponse: boolean = this.canAdd(astronaut);

        if (astroResponse) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}