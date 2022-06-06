const {config} = require ('dotenv').config({path: './.env'});

module.exports = {
    conexion : {
        URL: process.env.DATABASE_URL,
        PORT: process.env.PORT
    }
};