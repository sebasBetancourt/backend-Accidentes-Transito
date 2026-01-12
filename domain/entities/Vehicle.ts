export enum BrakingSystem {
    ABS = 'ABS',
    NO_ABS = 'NO_ABS'
}

export class Vehicle {
    constructor(
        public readonly mass: number, // Se define la masa del vehículo
        public readonly brakingSystem: BrakingSystem // Se define el sistema de frenado del vehículo
    ) {
        if (mass <= 0) throw new Error("Mass must be positive");
    }
}
