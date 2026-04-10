const Marcas = require('../../models/modulocatalogo/marcas.model');

exports.crear = async (req, res) => {
  await Marcas.crear(req.body);
  res.json({ mensaje: 'Marca creada' });
};

exports.listar = async (req, res) => {
  const data = await Marcas.listar();
  res.json(data.rows);
};

exports.actualizar = async (req, res) => {
  await Marcas.actualizar(req.params.id, req.body);
  res.json({ mensaje: 'Marca actualizada' });
};

exports.desactivar = async (req, res) => {
  await Marcas.desactivar(req.params.id);
  res.json({ mensaje: 'Marca desactivada' });
};

exports.activar = async (req, res) => {
  await Marcas.activar(req.params.id);
  res.json({ mensaje: 'Marca activada' });
};

exports.desaparecer = async (req, res) => {
  await Marcas.desaparecer(req.params.id);
  res.json({ mensaje: 'Marca eliminada' });
};