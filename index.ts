import Fastify from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

import { healthRoutes } from '@infrastructure/http/routes/health.routes';



const app = Fastify({
  logger: true
}).withTypeProvider<ZodTypeProvider>();

//Rutas
app.register(healthRoutes);


// Iniciar el servidor
const start = async () => {

  try {
    await app.listen({ port: 3000 });
    console.log('🚀 Servidor Corriendo Localmente http://localhost:3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
