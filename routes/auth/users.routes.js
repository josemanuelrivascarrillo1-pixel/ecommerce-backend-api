const express = require('express');
const router = express.Router();
const controller = require('../../controllers/auth/users.controller');
const { verificarToken, verificarRol } = require('../../middleware/auth.middleware');

// Todas las rutas requieren autenticación y rol Administrador
router.use(verificarToken);
router.use(verificarRol('Administrador'));

// GET /users - Listar usuarios activos
router.get('/', controller.listar);

// GET /users/inactivos - Listar usuarios inactivos
//  IMPORTANTE: debe ir ANTES de /:id para que Express no confunda 'inactivos' con un ID
router.get('/inactivos', controller.listarInactivos);

// GET /users/:id - Obtener usuario por ID
router.get('/:id', controller.obtenerPorId);

// POST /users - Crear nuevo usuario
router.post('/', controller.crear);

// PUT /users/:id - Actualizar usuario
router.put('/:id', controller.actualizar);

// PATCH /users/:id/activar - Activar usuario
router.patch('/:id/activar', controller.activar);

// PATCH /users/:id/desactivar - Desactivar usuario
router.patch('/:id/desactivar', controller.desactivar);

// DELETE /users/:id - Eliminar usuario permanentemente
router.delete('/:id', controller.desaparecer);

module.exports = router;