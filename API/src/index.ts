import "reflect-metadata";
import dotenv from 'dotenv';
import app from './app';
import { AppDataSource } from "./database/db";
import recetasRouter from './app/Recetas/recetas.router'

dotenv.config({});

// Start the application by listening to specific port
const port = Number(process.env.PORT || process.env.PORT || 8080);
app.listen(port, () => {
  console.info('Express application started on port: ' + port);
});

app.use('/recetas/', recetasRouter)

async function StartDatabase() {
  await AppDataSource.initialize()
  console.log('Connected to DataBase')
}
StartDatabase();