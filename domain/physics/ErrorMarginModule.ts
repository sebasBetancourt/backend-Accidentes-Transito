// Se define la interface Range, que contiene el minimo y el maximo.
export interface Range {
    min: number;
    max: number;
}

// Se define el modulo de ErrorMargin, calculo de margen de error.
export class ErrorMarginModule {
    /**
     * Calculates a range based on a percentage of uncertainty.
     * @param value The base value
     * @param percentage The uncertainty percentage (e.g., 0.1 for 10%)
     */
    public calculateRange(value: number, percentage: number): Range { // Se define el calculo de margen de error
        return {
            min: value * (1 - percentage),
            max: value * (1 + percentage)
        };
    }
}
