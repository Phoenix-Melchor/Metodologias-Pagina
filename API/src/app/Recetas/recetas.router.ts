import express from 'express'
import { createReceta, deleteReceta, readReceta, updateReceta } from './recetas.service';

const router = express.Router()


router.get('/:id?', async (_req, res) => {
  try {
    let receta = null
    if (_req?.params?.id){receta = await readReceta(Number(_req?.params?.id))}
    else {receta = await readReceta();}
    res.json(receta);
  } catch (error) {
    console.error('Error al obtener recetas:', error);
    res.status(500).send('Error al obtener recetas de la base de datos');
  }
});


router.post('/post', async (_req, res) => {
  try{
    const data = _req.body
    const receta = await createReceta(data);
    res.json(receta)
  }
  catch(error){
    console.error('Error al agregar receta', error);
    res.status(500).send('Error al agregar receta');
  }
})

router.put('/update/:id', async (_req, res) => {
  try{
    const data = _req.body
    const receta = await updateReceta(Number(_req.params.id), data)
    res.json(receta)
  }
  catch(error){
    console.error('Error al actualizar receta', error);
    res.status(500).send('Error al actualizar receta');
  }
})

router.delete('/remove/:id', async (_req, res) => {
  try{
    const receta = await deleteReceta(Number(_req.params.id))
    res.json(receta)
  }
  catch(error){
    console.error('Error al eliminar receta', error);
    res.status(500).send('Error al eliminar receta')
  }
})

export default router