
const Catalogo = require('../models/catalogo.model');

// GET /catalogo — todos los productos activos
exports.listar = async (req, res) => {
  try {
    const data = await Catalogo.listar();
    res.json(data.rows);
  } catch (error) {
    console.error('Error al listar catálogo:', error);
    res.status(500).json({ error: error.message });
  }
};

// GET /catalogo/destacados — productos destacados para el home
exports.listarDestacados = async (req, res) => {
  try {
    const data = await Catalogo.listarDestacados();
    res.json(data.rows);
  } catch (error) {
    console.error('Error al listar destacados:', error);
    res.status(500).json({ error: error.message });
  }
};

// GET /catalogo/:slug — detalle de un producto
exports.obtenerPorSlug = async (req, res) => {
  try {
    const data = await Catalogo.obtenerPorSlug(req.params.slug);
    if (data.rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(data.rows[0]);
  } catch (error) {
    console.error('Error al obtener producto:', error);
    res.status(500).json({ error: error.message });
  }
};

// GET /catalogo/categoria/:slug — productos por categoría
exports.listarPorCategoria = async (req, res) => {
  try {
    const data = await Catalogo.listarPorCategoria(req.params.slug);
    res.json(data.rows);
  } catch (error) {
    console.error('Error al listar por categoría:', error);
    res.status(500).json({ error: error.message });
  }
};