const pool = require('../db');

const pagInicio = (req, res, next) => {
    res.send('Bienvenido');
}

const getAllUsers = async (req, res, next) => {
    try {
        const resultUsers = await pool.query(`SELECT * FROM "Users"."Usuario"`);
        res.json(resultUsers.rows);
    } catch (error) {
        next(error);
    }
}

const gelAllRoles = async (req, res, next) => {
    try {
        const resultRoles = await pool.query(`SELECT * FROM "Users"."Roles"`);
        res.json(resultRoles.rows);
    } catch (error) {
        next(error);
    }
}

const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await pool.query(`SELECT * FROM "Users"."Usuario", "Users"."Roles" 
                                    WHERE "roleNombre" = "userRole" AND "userCedula" = '${id}'`);
        if (result.rows.length === 0) return res.status(404).json({
            message: "Usuario no encontrado"
        })
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const crearUsuario = async (req, res, next) => {
    const { cedula, nombre, apellidos, role, password } = req.body;
    try {
        const resultInsert = await pool.query(`INSERT INTO "Users"."Usuario"("userCedula", "userNombre", "userApellidos", "userRole", password)
        VALUES ('${cedula}', '${nombre}', '${apellidos}', '${role}', '${password}') RETURNING *;`);
        res.json(resultInsert.rows[0]);
    } catch (error) {
        next(error);
    }
}

const borrarUsuario = async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await pool.query(`DELETE FROM "Users"."Usuario" 
                                    WHERE "userCedula" = '${id}' RETURNING *`);
        if (result.rowCount === 0) return res.status(404).json({
            message: "Usuario no encontrado"
        })
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const updateUsuario = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { cedula, nombre, apellidos, password } = req.body;
        const result = await pool.query(`UPDATE "Users"."Usuario" SET "userCedula" = '${cedula}', 
                                    "userNombre" = '${nombre}', "userApellidos" = '${apellidos}', password = '${password}' 
                                    WHERE "userCedula" = '${id}' RETURNING *;`);
        if (result.rows.length === 0) return res.status(404).json({
            message: "Usuario no encontrado"
        });
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllUsers,
    pagInicio,
    getUserById,
    gelAllRoles,
    crearUsuario,
    borrarUsuario,
    updateUsuario,
};