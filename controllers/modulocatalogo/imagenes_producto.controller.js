const Imagenes = require('../../models/modulocatalogo/imagenes_producto.model');

exports.crear = async (req, res) => {
  await Imagenes.crear(req.body);
  res.json({ mensaje: 'Imagen creada' });
};

exports.listar = async (req, res) => {
  const data = await Imagenes.listar();
  res.json(data.rows);
};

exports.actualizar = async (req, res) => {
  await Imagenes.actualizar(req.params.id, req.body);
  res.json({ mensaje: 'Imagen actualizada' });
};

exports.desaparecer = async (req, res) => {
  await Imagenes.desaparecer(req.params.id);
  res.json({ mensaje: 'Imagen eliminada' });
};