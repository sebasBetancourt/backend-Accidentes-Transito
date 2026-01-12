export class HumanFactor {
    constructor(
        public readonly reactionTime: number
    ) {
        if (reactionTime < 0) throw new Error("Reaction time cannot be negative");
    }
}
