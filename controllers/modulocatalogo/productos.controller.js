const Productos = require('../../models/modulocatalogo/productos.model');

exports.crear = async (req, res) => {
  await Productos.crear(req.body);
  res.json({ mensaje: 'Producto creado' });
};

exports.listar = async (req, res) => {
  const data = await Productos.listar();
  res.json(data.rows);
};

exports.actualizar = async (req, res) => {
  await Productos.actualizar(req.params.id, req.body);
  res.json({ mensaje: 'Producto actualizado' });
};

exports.desactivar = async (req, res) => {
  await Productos.desactivar(req.params.id);
  res.json({ mensaje: 'Producto desactivado' });
};

exports.activar = async (req, res) => {
  await Productos.activar(req.params.id);
  res.json({ mensaje: 'Producto activado' });
};

exports.desaparecer = async (req, res) => {
  await Productos.desaparecer(req.params.id);
  res.json({ mensaje: 'Producto eliminado' });
};