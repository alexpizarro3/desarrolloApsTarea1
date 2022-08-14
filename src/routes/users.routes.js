const {Router} = require('express');
const { getAllUsers, pagInicio, getUserById, gelAllRoles, crearUsuario, borrarUsuario, updateUsuario, getAllProductos, gelAllTipoProducto, getProductoById, crearProducto, borrarProducto, updateProducto, crearVenta, crearDetalleVenta} = require('../controllers/user.controller');

const pool = require('../db');
const router = Router();

router.get('/', pagInicio);
router.get('/users/', getAllUsers);
router.get('/roles/', gelAllRoles);
router.get('/users/:id', getUserById);
router.post('/crearUser', crearUsuario);
router.delete('/borrarUser/:id', borrarUsuario);
router.put('/upUser/:id', updateUsuario);

router.get('/productos/', getAllProductos);
router.get('/productos/tipos', gelAllTipoProducto);
router.get('/productos/:id', getProductoById);
router.post('/crearProducto/', crearProducto);
router.delete('/borrarProducto/:id', borrarProducto);
router.put('/upProducto/:id', updateProducto);

router.post('/crearVenta/', crearVenta);
router.post('/crearDetalleVenta/', crearDetalleVenta);

module.exports = router;