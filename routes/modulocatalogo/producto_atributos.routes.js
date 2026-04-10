const express = require('express');
const router = express.Router();
const controller = require('../../controllers/modulocatalogo/producto_atributos.controller');

router.get('/', controller.listar);
router.post('/', controller.crear);
router.put('/:id', controller.actualizar);

// Delete real (no estado
router.delete('/:id', controller.desaparecer);

module.exports = router;