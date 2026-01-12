export class Evidence {
    constructor(
        public readonly skidMarkLength: number // Se define la longitud de las huellas de frenado
    ) {
        if (skidMarkLength < 0) throw new Error("Skid mark length cannot be negative");
    }
}
