const Conexion = require('../../config/database');

module.exports = {

crear: (data) => Conexion.query(
'INSERT INTO imagenes_producto(fk_producto, url, alt_text, es_principal, orden, public_id) VALUES($1,$2,$3,$4,$5,$6)',
[data.fk_producto, data.url, data.alt_text, data.es_principal, data.orden, data.public_id]
),

listar: () => Conexion.query(
'SELECT * FROM imagenes_producto ORDER BY orden ASC'
),

actualizar: (id, data) => Conexion.query(
'UPDATE imagenes_producto SET url=$1, alt_text=$2, es_principal=$3, orden=$4, public_id=$5 WHERE pk_imagen=$6',
[data.url, data.alt_text, data.es_principal, data.orden, data.public_id, id]
),


desaparecer: (id) => Conexion.query(
'DELETE FROM imagenes_producto WHERE pk_imagen=$1',
[id]
)

};