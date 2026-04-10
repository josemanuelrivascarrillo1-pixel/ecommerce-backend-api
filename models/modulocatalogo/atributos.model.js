const Conexion = require('../../config/database');

module.exports = {

crear: (data) => Conexion.query(
'INSERT INTO atributos(nombre, unidad, fk_categoria, filtrable, orden) VALUES($1,$2,$3,$4,$5)',
[data.nombre, data.unidad, data.fk_categoria, data.filtrable, data.orden]
),

listar: () => Conexion.query(
'SELECT * FROM atributos WHERE estado = 1 ORDER BY orden ASC'
),

actualizar: (id, data) => Conexion.query(
'UPDATE atributos SET nombre=$1, unidad=$2, fk_categoria=$3, filtrable=$4, orden=$5 WHERE pk_atributo=$6',
[data.nombre, data.unidad, data.fk_categoria, data.filtrable, data.orden, id]
),

desactivar: (id) => Conexion.query(
'UPDATE atributos SET estado=0 WHERE pk_atributo=$1',
[id]
),

activar: (id) => Conexion.query(
'UPDATE atributos SET estado=1 WHERE pk_atributo=$1',
[id]
),

desaparecer: (id) => Conexion.query(
'DELETE FROM atributos WHERE pk_atributo=$1',
[id]
)

};