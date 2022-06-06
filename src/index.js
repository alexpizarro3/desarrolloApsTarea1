const express = require('express'); //se importa el modulo express de node para el backend
const morgan = require('morgan'); //se importa morgan para poder ver las peticiones del servidor en la terminal
const usersRoutes = require('./routes/users.routes'); //se importan las rutas o direcciones web para ejecutar
const cors = require('cors');
const { conexion } = require('./config')
const app = express(); 

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(usersRoutes);

app.use((err, req, res, next) => {//Funcion de error
    return res.json({
        message: err.message
    });
});

const port = conexion.PORT || 3000;
app.listen(port, () => {
    console.log('Desde el server ' + port);
});

