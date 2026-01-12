# Physics Calculation Engine Implementation Plan

## Goal Description
Implement the core physics calculation engine for the Accident Reconstruction Platform. This includes defining domain entities, implementing kinematics and human factors calculation modules, and coordinating them via a service.

## User Review Required
- **Physical Models:** Confirming using standard drag factor formulas (e.g., $V = \sqrt{2 \cdot \mu \cdot g \cdot d}$).
- **Architecture:** Following Clean Architecture as requested.

## Proposed Changes

### Domain Layer
#### [NEW] Entities
- `domain/entities/Road.ts`: Defines road conditions and friction.
- `domain/entities/Evidence.ts`: Defines physical evidence like skid marks.
- `domain/entities/HumanFactor.ts`: Defines driver reaction times.
- `domain/entities/Case.ts`: Aggregate root combining Vehicle, Road, Evidence, etc.
- `domain/entities/Vehicle.ts`: Refactor or create to include mass and braking system.

#### [NEW] Physics Modules
- `domain/physics/KinematicsModule.ts`: Calculations for speed, distance based on work-energy theorem.
- `domain/physics/HumanReactionModule.ts`: Calculations for reaction distance/time.
- `domain/physics/ErrorMarginModule.ts`: Handling calculation uncertainties.

#### [NEW] Domain Services
- `domain/services/AccidentCalculationService.ts`: Orchestrates the calculation using the modules.

### Application Layer
#### [NEW] Use Cases
- `application/use-cases/GenerateAccidentReport.ts`: Application entry point for generating the report data.

## Verification Plan
### Automated Tests
- Create unit tests for each physics module to verify mathematical correctness against known solved problems.
- Create a test script to run the `AccidentCalculationService` with sample data and print the results.
