import { HumanFactor } from '../entities/HumanFactor';


// Se define el modulo de HumanReaction, calculo de distancia recorrida durante el tiempo de reaccion.
export class HumanReactionModule {
    /**
     * Calculates the distance traveled during the reaction time.
     * Formula: d = v * t
     * @param speedMps Speed in meters per second
     * @param humanFactor Human factor entity containing reaction time
     * @returns Distance in meters
     */
    public calculateReactionDistance(speedMps: number, humanFactor: HumanFactor): number { // Se define el calculo de distancia recorrida durante el tiempo de reaccion
        return speedMps * humanFactor.reactionTime;
    }
}
