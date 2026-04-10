const Categorias = require('../../models/modulocatalogo/categorias.model');

exports.crear = async (req, res) => {
  await Categorias.crear(req.body);
  res.json({ mensaje: 'Categoria creada' });
};

exports.listar = async (req, res) => {
  const data = await Categorias.listar();
  res.json(data.rows);
};

exports.actualizar = async (req, res) => {
  await Categorias.actualizar(req.params.id, req.body);
  res.json({ mensaje: 'Categoria actualizada' });
};

exports.desactivar = async (req, res) => {
  await Categorias.desactivar(req.params.id);
  res.json({ mensaje: 'Categoria desactivada' });
};

exports.activar = async (req, res) => {
  await Categorias.activar(req.params.id);
  res.json({ mensaje: 'Categoria activada' });
};

exports.desaparecer = async (req, res) => {
  await Categorias.desaparecer(req.params.id);
  res.json({ mensaje: 'Categoria eliminada' });
};