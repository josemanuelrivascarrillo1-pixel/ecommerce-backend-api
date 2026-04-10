const ProductoAtributos = require('../../models/modulocatalogo/producto_atributos.model');

exports.crear = async (req, res) => {
  await ProductoAtributos.crear(req.body);
  res.json({ mensaje: 'Atributo asignado al producto' });
};

exports.listar = async (req, res) => {
  const data = await ProductoAtributos.listar();
  res.json(data.rows);
};

exports.actualizar = async (req, res) => {
  await ProductoAtributos.actualizar(req.params.id, req.body);
  res.json({ mensaje: 'Atributo actualizado' });
};

exports.desaparecer = async (req, res) => {
  await ProductoAtributos.desaparecer(req.params.id);
  res.json({ mensaje: 'Atributo eliminado' });
};