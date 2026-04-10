const express = require('express');
const router = express.Router();
const controller = require('../../controllers/modulocatalogo/categorias.controller');

router.get('/', controller.listar);
router.post('/', controller.crear);
router.put('/:id', controller.actualizar);

// Soft delete
router.patch('/:id/desactivar', controller.desactivar);
router.put('/:id/activar', controller.activar);
// Hard delete
router.delete('/:id', controller.desaparecer);

module.exports = router;