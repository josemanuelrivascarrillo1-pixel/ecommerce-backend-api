
const express = require('express');
const router = express.Router();
const controller = require('../controllers/catalogo.controller');

// GET /catalogo — todos los productos
router.get('/', controller.listar);

// GET /catalogo/destacados — productos destacados

router.get('/destacados', controller.listarDestacados);

// GET /catalogo/categoria/:slug — por categoría
router.get('/categoria/:slug', controller.listarPorCategoria);

// GET /catalogo/:slug — detalle de producto
router.get('/:slug', controller.obtenerPorSlug);

module.exports = router;