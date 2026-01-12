import { Case } from '../entities/Case';
import { KinematicsModule } from '../physics/KinematicsModule';
import { HumanReactionModule } from '../physics/HumanReactionModule';
import { ErrorMarginModule } from '../physics/ErrorMarginModule';

export interface CalculationResult {
    speedMps: number;
    speedKph: number;
    reactionDistance: number;
    totalStoppingDistance: number;
    speedRangeKph: { min: number, max: number };
}

export class AccidentCalculationService {
    private kinematics: KinematicsModule;
    private humanReaction: HumanReactionModule;
    private errorMargin: ErrorMarginModule;

    constructor() {
        this.kinematics = new KinematicsModule();
        this.humanReaction = new HumanReactionModule();
        this.errorMargin = new ErrorMarginModule();
    }

    public calculate(accidentCase: Case): CalculationResult {
        // 1. Calculate Speed from Skid Marks
        const speedMps = this.kinematics.calculateSpeedFromSkidMarks(
            accidentCase.road,
            accidentCase.evidence
        );
        const speedKph = this.kinematics.mpsToKph(speedMps);

        // 2. Calculate Reaction Distance
        const reactionDistance = this.humanReaction.calculateReactionDistance(
            speedMps,
            accidentCase.humanFactor
        );

        // 3. Total Stopping Distance (Reaction + Braking)
        // Braking distance is effectively the skid mark length in this simplified model
        // assuming full locking.
        const stoppingDistance = reactionDistance + accidentCase.evidence.skidMarkLength;

        // 4. Calculate Error Margins (Assuming 5% uncertainty for now, configurable)
        const margin = 0.05;
        const speedRange = this.errorMargin.calculateRange(speedKph, margin);

        return {
            speedMps,
            speedKph,
            reactionDistance,
            totalStoppingDistance: stoppingDistance,
            speedRangeKph: speedRange
        };
    }
}
