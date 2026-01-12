# Generador de Informes, y Calculos Fisicos de Accidentes

## Objetivo Real

Que un perito ingrese todos los datos de un accidente urbano con huellas de frenado y obtenga un **informe pericial en PDF**, con cálculos físicos automáticos y conclusiones técnicas claras.

## Modulos Importantes

- Entrada y Almacenamiento de Datos.
- Motor de Calculo para Datos.
- Generador del Informe completo, PDF.
- Recomendaciones y Conclusiones ( Plus )
- Firma Digital ( Plus )
- Validacion Legal ( Obligatorio )

## Tecnologias Iniciales

- Backend
    - Nodejs
    - Fastify
    - Typescript
    - PrismaORM
    - Clean Arquitecture
- Front-End
    - Reactjs
    - Typescript
    - Nextsjs
    - Tailwind
- Bases de Datos
    - Postgresql

## Estructura

```jsx
src/
├── domain/
│   ├── entities/
│   │   ├── Case.ts
│   │   ├── Vehicle.ts
│   │   └── Evidence.ts
│   ├── services/
│   │   └── AccidentCalculationService.ts
│
├── application/
│   ├── use-cases/
│   │   └── GenerateAccidentReport.ts
│
├── infrastructure/
│   ├── http/
│   │   ├── controllers/
│   │   └── routes.ts
│   ├── database/
│   │   └── prisma/
│   └── pdf/
│       └── PdfReportGenerator.ts
│
├── shared/
│   ├── constants/
│   └── utils/
│
└── server.ts
```

## Etapa Inicial

**Motor de Calculo Fisico**

- Recibe datos físicos
- Aplica modelos matemáticos conocidos
- Devuelve resultados reproducibles Justifica cada resultado
1. Entidades Fisicas
    
    ```jsx
    Vehicle
    - mass (kg)
    - brakingSystem (ABS | NO_ABS)
    
    Road
    - frictionCoefficient
    - condition (DRY | WET)
    
    Evidence
    - skidMarkLength (m)
    
    HumanFactor
    - reactionTime (s)
    
    ```
    
2. Modulo de Calculo
    1. KinematicsModule
        - Velocidad por huellas
        - Tiempo
        - Distancias
    2. HumanReactionModule
        - Distancia de reacción
        - Tiempo total
    3. ErrorMarginModule
        - Rangos
        - Incertidumbre
3. AccidentCalculationService
    
    Calculo completo de accidentes
    
    - Usar módulos físicos
    - Coordinar cálculos
    - Generar resultados coherentes
4. Interfaces externas
    
    Aquí el motor se conecta con:
    
    - API
    - PDF
    - BD
    
    Ejemplo:
    
    - Controller HTTP
    - Use Case
    - Report Generator
    - Guardar resultado en BD
    - Mostrar en UI
    - Generar PDF
    - Firmar