const {Router} = require('express');
const { getAllUsers, pagInicio, getUserById, gelAllRoles, crearUsuario, borrarUsuario, updateUsuario} = require('../controllers/user.controller');

const pool = require('../db');
const router = Router();

router.get('/', pagInicio);
router.get('/users', getAllUsers);
router.get('/roles', gelAllRoles);
router.get('/users/:id', getUserById);
router.post('/crearUser', crearUsuario);
router.delete('/borrarUser/:id', borrarUsuario);
router.put('/upUser/:id', updateUsuario);

module.exports = router;