const Conexion = require('../../config/database');

module.exports = {

crear: (data) => Conexion.query(
'INSERT INTO marcas(nombre, logo_url, sitio_web) VALUES($1,$2,$3)',
[data.nombre, data.logo_url, data.sitio_web]
),

listar: () => Conexion.query(
'SELECT * FROM marcas WHERE estado = 1 ORDER BY pk_marca ASC'
),

actualizar: (id, data) => Conexion.query(
'UPDATE marcas SET nombre=$1, logo_url=$2, sitio_web=$3 WHERE pk_marca=$4',
[data.nombre, data.logo_url, data.sitio_web, id]
),

desactivar: (id) => Conexion.query(
'UPDATE marcas SET estado=0 WHERE pk_marca=$1',
[id]
),

activar: (id) => Conexion.query(
'UPDATE marcas SET estado=1 WHERE pk_marca=$1',
[id]
),

desaparecer: (id) => Conexion.query(
'DELETE FROM marcas WHERE pk_marca=$1',
[id]
)

};