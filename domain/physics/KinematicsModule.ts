import { Road } from '../entities/Road';
import { Evidence } from '../entities/Evidence';

// Se define el modulo de Kinematics, calculo de velocidad, tiempo, distancia, etc. Basados con el teorema de trabajo y energia.

export class KinematicsModule {
    private static readonly GRAVITY = 9.81; // m/s^2 // Constante de gravedad

    /**
     * Calculates the minimum speed required to leave skid marks of a certain length.
     * Formula: V = sqrt(2 * mu * g * d)
     * @returns Speed in m/s
     */
    public calculateSpeedFromSkidMarks(road: Road, evidence: Evidence): number { // Se define el calculo de velocidad a partir de las huellas de frenado
        const mu = road.frictionCoefficient; // Se define el coeficiente de friccion
        const d = evidence.skidMarkLength; // Se define la longitud de las huellas de frenado

        // V = sqrt(2 * mu * g * d)
        return Math.sqrt(2 * mu * KinematicsModule.GRAVITY * d); // Se define la velocidad
    }

    public mpsToKph(mps: number): number { // Se define el calculo de velocidad a partir de m/s a kph
        return mps * 3.6; // Se define la velocidad
    }
}
