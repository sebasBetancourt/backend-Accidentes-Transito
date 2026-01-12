import { FastifyInstance } from "fastify";


export async function healthRoutes(app: FastifyInstance) {
  app.get('/health', async () => {
    return { 
        status: 'ok',
        timestamp: new Date().toISOString() 
    };
  });

//   app.get('/health/db', async (request, reply) => {
//   try {
//     // En Prisma 7 con adaptador, a veces es mejor usar un comando simple de validación
//     await prisma.$executeRawUnsafe('SELECT 1'); 
//     return { 
//         status: 'ok',
//         database: 'connected'
//     };
//   } catch (error: any) {
//     app.log.error(error); // ESTO imprimiría el error real en tu consola
//     return reply.status(500).send({ 
//         status: 'error',
//         message: error.message,
//         // Si sale "relation does not exist", es que falta el schema en la conexión
//     });
//   }
// });
}
