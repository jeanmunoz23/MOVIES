
const dotenv = require('dotenv');
dotenv.config({ path: 'variables.env' });
dotenv.config()
// config db
const { MongoClient } = require('mongodb')
const URL = process.env.DB_MONGO || ""
const client = new MongoClient(URL)
// functions js convencional
const connectToMongodb = async () =>  { 
    try {
        await client.connect()
        console.log('Conectado a mongoDB')
        return client
    } catch (error) {
        console.log('Error al conectarse a mongoDB: ' + error)
        return null
    }
}
// arrow functions
const disconnectToMongodb = async () => { 
    try {
        await client.close()
        console.log('Desconectado de mongoDB')
    } catch (error) {
        console.log('Error al desconectarse de mongoDB: ' + error)
    }
}
module.exports ={ connectToMongodb, disconnectToMongodb}
