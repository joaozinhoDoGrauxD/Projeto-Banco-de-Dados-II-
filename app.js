import express from 'express';
import 'dotenv/config';
import sequelize from "./src/config/sequelize.js";
import redis from "./src/config/redis.js"
import {uri, mongoose} from "./src/config/mongodb.js"
const app = express();


try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

redis.on('error', err => console.log('Redis Client Error', err));

await redis.connect()

mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000 
})
.then(() => console.log('Banco Conectado com SUCESSO!'))
.catch(err => {
    console.error(' ERRO CRÍTICO DE CONEXÃO:');
    console.error('Motivo:', err.message); 
    console.error('Verifique: 1. Senha na string; 2. IP no Network Access (0.0.0.0/0)');
});

export default app;

