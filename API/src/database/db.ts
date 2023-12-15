import { Recetas } from "@entity/receta";
import "reflect-metadata"
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "18.209.87.232",
    username: "AIJ",
    password: "Phoenix-Melchor14",
    database: "recetario",
    port: 3306,
    entities:[Recetas],
    logging: true,
    synchronize: false
})