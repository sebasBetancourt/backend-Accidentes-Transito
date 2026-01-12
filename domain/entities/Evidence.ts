export class Evidence {
    constructor(
        public readonly skidMarkLength: number
    ) {
        if (skidMarkLength < 0) throw new Error("Skid mark length cannot be negative");
    }
}
