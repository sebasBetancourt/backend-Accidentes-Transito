import { HumanFactor } from '../entities/HumanFactor';

export class HumanReactionModule {
    /**
     * Calculates the distance traveled during the reaction time.
     * Formula: d = v * t
     * @param speedMps Speed in meters per second
     * @param humanFactor Human factor entity containing reaction time
     * @returns Distance in meters
     */
    public calculateReactionDistance(speedMps: number, humanFactor: HumanFactor): number {
        return speedMps * humanFactor.reactionTime;
    }
}
