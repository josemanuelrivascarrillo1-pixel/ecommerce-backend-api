const Conexion = require('../../config/database');

module.exports = {

crear: (data) => Conexion.query(
'INSERT INTO categorias(nombre, slug, descripcion, imagen_url, fk_parent, orden) VALUES($1,$2,$3,$4,$5,$6)',
[data.nombre, data.slug, data.descripcion, data.imagen_url, data.fk_parent, data.orden]
),

listar: () => Conexion.query(
'SELECT * FROM categorias WHERE estado = 1 ORDER BY orden ASC'
),

actualizar: (id, data) => Conexion.query(
'UPDATE categorias SET nombre=$1, slug=$2, descripcion=$3, imagen_url=$4, fk_parent=$5, orden=$6 WHERE pk_categoria=$7',
[data.nombre, data.slug, data.descripcion, data.imagen_url, data.fk_parent, data.orden, id]
),

desactivar: (id) => Conexion.query(
'UPDATE categorias SET estado=0 WHERE pk_categoria=$1',
[id]
),

activar: (id) => Conexion.query(
'UPDATE categorias SET estado=1 WHERE pk_categoria=$1',
[id]
),


desaparecer: (id) => Conexion.query(
'DELETE FROM categorias WHERE pk_categoria=$1',
[id]
)

};