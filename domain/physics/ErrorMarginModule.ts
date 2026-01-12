export interface Range {
    min: number;
    max: number;
}

export class ErrorMarginModule {
    /**
     * Calculates a range based on a percentage of uncertainty.
     * @param value The base value
     * @param percentage The uncertainty percentage (e.g., 0.1 for 10%)
     */
    public calculateRange(value: number, percentage: number): Range {
        return {
            min: value * (1 - percentage),
            max: value * (1 + percentage)
        };
    }
}
