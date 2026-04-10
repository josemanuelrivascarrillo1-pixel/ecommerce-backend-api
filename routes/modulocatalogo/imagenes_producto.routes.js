const express = require('express');
const router = express.Router();
const controller = require('../../controllers/modulocatalogo/imagenes_producto.controller');

router.get('/', controller.listar);
router.post('/', controller.crear);
router.put('/:id', controller.actualizar);

// Hard delete
router.delete('/:id', controller.desaparecer);

module.exports = router;