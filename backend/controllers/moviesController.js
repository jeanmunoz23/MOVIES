const Movies = require("../models/Movies");    
const { MongoClient, ObjectId } = require('mongodb');

// incluyo funciones declaradas en mongodb.js
const { connectToMongodb, disconnectToMongodb} = require('../config/db')

exports.crearMovie= async (req, res) => {
    try {
        // Creamos nuestro movies
        nuevaMovie = new Movies(req.body);
        if (nuevaMovie === undefined) {
            res.status(400).send('Error en el formato de los datos de la movie')
        }
        const client = await connectToMongodb();
        if (!client) {
            res.status(500).send('Error al conectarse a MongoDB')
            return;
        }
        const db = client.db('movies') 
        const collection = await db.collection('movies').insertOne(nuevaMovie)
            .then(() => {
                console.log('Nueva pelicula creada')
                res.status(201).send(nuevaMovie)
            }).catch(err => { 
                console.error(err)
            }).finally(() => { client.close()})
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerMovies = async (req, res) => {
    const client = await connectToMongodb();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB')
        return;
    }
   
   
    try {  
        const db = client.db('movies')
        const movies = await db.collection('movies').find().toArray() 
        await disconnectToMongodb()
        res.send(movies)

        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
}

exports.actualizarMovie = async (req, res) => {

    try {

        const client = await connectToMongodb();
        if (!client) {
            res.status(500).send('Error al conectarse a MongoDB')
            return;
        }
        const db = client.db('movies') 
        const id = parseInt(req.params.id) || 0;
        const nuevosDatos = req.body
        const collection = await db.collection('movies').updateOne({ id: id }, { $set: nuevosDatos })
            .then(() => {
                let mensaje ='Pelicula actualizado ID : ' + id
              res.status(200).json({ descripcion: mensaje , objeto: nuevosDatos})
            }).catch(err => { 
                let mensaje = 'Error al actualizar ID: ' + id 
                console.error(err)
                res.status(500).json({descripcion : mensaje, objeto: nuevosDatos})
            }).finally(() => {
                client.close()
            })
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarMovie = async (req, res) => {
    const client = await connectToMongodb();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB');
        return;
    }

    const id = req.params.id;

    try {  
        const db = client.db('movies');
        const result = await db.collection('movies').deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 1) {
            res.send('Pelicula eliminada correctamente');
        } else {
            res.status(404).send('No se encontró la documento');
        }
        await disconnectToMongodb();
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al intentar eliminar la Pelicula');
    }
}

exports.obtenerMovie = async (req, res) => {
    const client = await connectToMongodb();
    if (!client) {
        res.status(500).send('Error al conectarse a MongoDB');
        return;
    }

    const id = req.params.id;

    try {  
        const db = client.db('movies');
        const movies = await db.collection('movies').findOne({ _id: new ObjectId(id) });
        console.log(movies);
        await disconnectToMongodb();
        res.send(movies);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};