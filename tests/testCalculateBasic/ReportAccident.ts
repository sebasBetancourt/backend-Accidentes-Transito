import { AccidentCalculationService } from '../../domain/services/AccidentCalculationService';
import { GenerateAccidentReport, GenerateReportInput } from '../../application/use-cases/GenerateAccidentReport';

async function runTest() {
    console.log("==========================================");
    console.log("🧪  TEST: Generación de Informe de Accidente");
    console.log("==========================================");

    // 1. Instanciar Servicios
    const calculationService = new AccidentCalculationService();
    const generateAccidentReport = new GenerateAccidentReport(calculationService);

    // 2. Definir Datos de Entrada (Escenario de Prueba)
    // Escenario: Vehículo frena en asfalto seco dejando huella de 35m
    const inputData: GenerateReportInput = {
        caseId: "TEST-CASE-2024-001",
        vehicle: {
            mass: 1200, // kg
            hasABS: true
        },
        road: {
            frictionCoefficient: 0.75, // Asfalto seco buen estado
            isWet: false
        },
        evidence: {
            skidMarkLength: 35.5 // metros
        },
        humanFactor: {
            reactionTime: 1.2 // segundos (promedio alerta)
        }
    };

    console.log("📋 Datos de Entrada:");
    console.log(JSON.stringify(inputData, null, 2));
    console.log("\n🚀 Ejecutando Cálculo...");

    try {
        // 3. Ejecutar Caso de Uso
        const result = await generateAccidentReport.execute(inputData);

        // 4. Validar y Mostrar Resultados
        console.log("\n✅ Resultados Obtenidos:");
        console.table({
            "Velocidad (m/s)": result.speedMps.toFixed(2),
            "Velocidad (km/h)": result.speedKph.toFixed(2),
            "Distancia Reacción (m)": result.reactionDistance.toFixed(2),
            "Distancia Total (m)": result.totalStoppingDistance.toFixed(2),
            "Rango Vel Min (km/h)": result.speedRangeKph.min.toFixed(2),
            "Rango Vel Max (km/h)": result.speedRangeKph.max.toFixed(2)
        });

        // Validaciones básicas (Assertions simples)
        if (result.speedKph > 0 && result.totalStoppingDistance > inputData.evidence.skidMarkLength) {
            console.log("\n✨ PRUEBA EXITOSA: Los cálculos son coherentes.");
        } else {
            console.error("\n❌ ERROR: Los resultados no son lógicos.");
        }

    } catch (error) {
        console.error("\n❌ ERROR EN EJECUCIÓN:", error);
    }
}

runTest();
