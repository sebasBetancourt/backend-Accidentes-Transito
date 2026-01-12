import { AccidentCalculationService, CalculationResult } from '../../domain/services/AccidentCalculationService';
import { Case } from '../../domain/entities/Case';
import { Vehicle, BrakingSystem } from '../../domain/entities/Vehicle';
import { Road, RoadCondition } from '../../domain/entities/Road';
import { Evidence } from '../../domain/entities/Evidence';
import { HumanFactor } from '../../domain/entities/HumanFactor';

export interface GenerateReportInput {
    caseId: string;
    vehicle: {
        mass: number;
        hasABS: boolean;
    };
    road: {
        frictionCoefficient: number;
        isWet: boolean;
    };
    evidence: {
        skidMarkLength: number;
    };
    humanFactor: {
        reactionTime: number;
    };
}

export class GenerateAccidentReport {
    constructor(private calculationService: AccidentCalculationService) { }

    // Se define el uso de caso de uso GenerateAccidentReport, que calcula el resultado de la simulacion.
    public async execute(input: GenerateReportInput): Promise<CalculationResult> {
        // 1. Map Input to Domain Entities
        const vehicle = new Vehicle(
            input.vehicle.mass,
            input.vehicle.hasABS ? BrakingSystem.ABS : BrakingSystem.NO_ABS
        );

        const road = new Road(
            input.road.frictionCoefficient,
            input.road.isWet ? RoadCondition.WET : RoadCondition.DRY
        );

        const evidence = new Evidence(input.evidence.skidMarkLength);
        const humanFactor = new HumanFactor(input.humanFactor.reactionTime);

        const accidentCase = new Case(
            input.caseId,
            vehicle,
            road,
            evidence,
            humanFactor
        );

        // 2. Perform Calculation
        const result = this.calculationService.calculate(accidentCase);

        // 3. (Optional) Save to DB or Generate PDF here (not yet implemented)

        return result;
    }
}
