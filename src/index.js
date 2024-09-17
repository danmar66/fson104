import { startServer } from './server.js';
import { initMongoDB } from './utils/initMongoDB.js';

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

bootstrap();
