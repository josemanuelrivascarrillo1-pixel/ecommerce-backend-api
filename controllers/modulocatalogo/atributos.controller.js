const Atributos = require('../../models/modulocatalogo/atributos.model');

exports.crear = async (req, res) => {
  await Atributos.crear(req.body);
  res.json({ mensaje: 'Atributo creado' });
};

exports.listar = async (req, res) => {
  const data = await Atributos.listar();
  res.json(data.rows);
};

exports.actualizar = async (req, res) => {
  await Atributos.actualizar(req.params.id, req.body);
  res.json({ mensaje: 'Atributo actualizado' });
};

exports.desactivar = async (req, res) => {
  await Atributos.desactivar(req.params.id);
  res.json({ mensaje: 'Atributo desactivado' });
};

exports.activar = async (req, res) => {
  await Atributos.activar(req.params.id);
  res.json({ mensaje: 'Atributo Activado' });
};

exports.desaparecer = async (req, res) => {
  await Atributos.desaparecer(req.params.id);
  res.json({ mensaje: 'Atributo eliminado' });
};