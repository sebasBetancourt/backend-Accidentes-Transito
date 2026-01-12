export enum RoadCondition {
    DRY = 'DRY',
    WET = 'WET'
}

export class Road {
    constructor(
        public readonly frictionCoefficient: number, // Se define el coeficiente de Friccion
        public readonly condition: RoadCondition // Se define la condicion de la carretera
    ) {
        if (frictionCoefficient <= 0 || frictionCoefficient > 1) {
            throw new Error("Friction coefficient must be between 0 and 1");
        }
    }
}
