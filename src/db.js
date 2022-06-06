const {Pool} = require('pg'); //Traemos la clase Pool de PG para poder hacer la conexion de BD
const { conexion } = require('./config');
//Mensaje

const pool = new Pool ({
    connectionString: conexion.URL,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;