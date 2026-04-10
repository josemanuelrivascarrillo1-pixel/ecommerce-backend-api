const express = require('express');
const router = express.Router();
const controller = require('../../controllers/modulocatalogo/productos.controller');

router.post('/', controller.crear);
router.get('/', controller.listar);
router.put('/:id', controller.actualizar);

router.patch('/:id/desactivar', controller.desactivar);
router.put('/:id/activar', controller.activar);

router.delete('/:id', controller.desaparecer);

module.exports = router;