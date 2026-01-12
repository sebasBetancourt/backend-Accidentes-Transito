import { Road } from '../entities/Road';
import { Evidence } from '../entities/Evidence';

export class KinematicsModule {
    private static readonly GRAVITY = 9.81; // m/s^2

    /**
     * Calculates the minimum speed required to leave skid marks of a certain length.
     * Formula: V = sqrt(2 * mu * g * d)
     * @returns Speed in m/s
     */
    public calculateSpeedFromSkidMarks(road: Road, evidence: Evidence): number {
        const mu = road.frictionCoefficient;
        const d = evidence.skidMarkLength;

        // V = sqrt(2 * mu * g * d)
        return Math.sqrt(2 * mu * KinematicsModule.GRAVITY * d);
    }

    public mpsToKph(mps: number): number {
        return mps * 3.6;
    }
}
