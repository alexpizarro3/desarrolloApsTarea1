const {Pool} = require('pg'); //Traemos la clase Pool de PG para poder hacer la conexion de BD
require ('dotenv').config({path: './.env'});

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;