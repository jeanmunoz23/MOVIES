const express = require('express');
// incluyo funciones declaradas en mongodb.js
const { connectToMongodb} = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectamos a la BD
connectToMongodb();
app.use(cors())

app.use(express.json());

app.use('/api/movies', require('./routes/movies'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})