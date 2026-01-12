export enum BrakingSystem {
    ABS = 'ABS',
    NO_ABS = 'NO_ABS'
}

export class Vehicle {
    constructor(
        public readonly mass: number,
        public readonly brakingSystem: BrakingSystem
    ) {
        if (mass <= 0) throw new Error("Mass must be positive");
    }
}
