const Conexion = require('../../config/database');

module.exports = {

crear: (data) => Conexion.query(
'INSERT INTO producto_atributos(fk_producto, fk_atributo, valor) VALUES($1,$2,$3)',
[data.fk_producto, data.fk_atributo, data.valor]
),

listar: () => Conexion.query(
`SELECT pa.*, 
p.nombre AS producto,
a.nombre AS atributo
FROM producto_atributos pa
INNER JOIN productos p ON pa.fk_producto = p.pk_producto
INNER JOIN atributos a ON pa.fk_atributo = a.pk_atributo`
),

actualizar: (id, data) => Conexion.query(
'UPDATE producto_atributos SET fk_producto=$1, fk_atributo=$2, valor=$3 WHERE pk_prod_atributo=$4',
[data.fk_producto, data.fk_atributo, data.valor, id]
),


desaparecer: (id) => Conexion.query(
'DELETE FROM producto_atributos WHERE pk_prod_atributo=$1',
[id]
)

};