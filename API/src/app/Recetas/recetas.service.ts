import { Recetas } from '@entity/receta';
import { AppDataSource } from 'src/database/db';

const RecetaRepo = AppDataSource.getRepository(Recetas)

export interface IReceta {
    nombre: string;
    tipo_cocina: string;
    ingredientes: string;
    instrucciones: string;
}


// CREATE SERVICE
export const createReceta = async (receta: IReceta) => {
  try {
    const newReceta = new Recetas()
    newReceta.nombre = receta.nombre
    newReceta.tipo_cocina = receta.tipo_cocina
    newReceta.ingredientes = receta.ingredientes
    newReceta.instrucciones = receta.instrucciones

    return await newReceta.save();
  } catch (e) {
    console.error(e);
  }
};

//READ SERVICE
export const readReceta = async (id?: number) => {
  try {
    if(id){return await RecetaRepo.findOne({where: {id: id}})}
    else{return await RecetaRepo.find();}
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener receta de la base de datos');
  }
};

// UPDATE SERVICE
export const updateReceta = async (id: number, receta: IReceta) => {
  try {
    const foundreceta = await RecetaRepo.findOne({ where: {id: id} });
    if (!foundreceta) return { message: 'Receta no encontrada' };

    foundreceta.nombre = receta.nombre
    foundreceta.tipo_cocina = receta.nombre
    foundreceta.ingredientes = receta.ingredientes
    foundreceta.instrucciones = receta.instrucciones
    
    return await foundreceta.save();
  } catch (e) {
    console.error(e);
  }
};

// DELETE SERVICE
export const deleteReceta = async (id: number) => {
    try{
        const foundreceta = await RecetaRepo.findOne({ where: {id: id} });
        if (!foundreceta) return { message: 'Receta no encontrada' };
        return await foundreceta.remove()
        
    } catch (e){
        console.error(e)
    }
};