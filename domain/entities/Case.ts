import { Vehicle } from './Vehicle';
import { Road } from './Road';
import { Evidence } from './Evidence';
import { HumanFactor } from './HumanFactor';


// Clase que representa un caso de accidente Completo.
export class Case {
    constructor(
        public readonly id: string,
        public readonly vehicle: Vehicle,
        public readonly road: Road,
        public readonly evidence: Evidence,
        public readonly humanFactor: HumanFactor,
        public readonly description?: string
    ) { }
}
