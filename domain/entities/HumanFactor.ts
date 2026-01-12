export class HumanFactor {
    constructor(
        public readonly reactionTime: number // Se define el tiempo de reacción del conductor
    ) {
        if (reactionTime < 0) throw new Error("Reaction time cannot be negative");
    }
}
