const Conexion = require('../../config/database');

module.exports = {

crear: (data) => Conexion.query(
`INSERT INTO productos(
sku, nombre, slug, descripcion_corta, descripcion,
precio, precio_oferta, fk_categoria, fk_marca,
modelo, garantia_meses, peso_kg, destacado, es_nuevo
)
VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`,
[
data.sku,
data.nombre,
data.slug,
data.descripcion_corta,
data.descripcion,
data.precio,
data.precio_oferta,
data.fk_categoria,
data.fk_marca,
data.modelo,
data.garantia_meses,
data.peso_kg,
data.destacado,
data.es_nuevo
]
),

listar: () => Conexion.query(
`SELECT p.*, 
c.nombre AS categoria,
m.nombre AS marca
FROM productos p
INNER JOIN categorias c ON p.fk_categoria = c.pk_categoria
INNER JOIN marcas m ON p.fk_marca = m.pk_marca
WHERE p.estado = 1
ORDER BY p.pk_producto ASC`
),

actualizar: (id, data) => Conexion.query(
`UPDATE productos SET
sku=$1, nombre=$2, slug=$3,
descripcion_corta=$4, descripcion=$5,
precio=$6, precio_oferta=$7,
fk_categoria=$8, fk_marca=$9,
modelo=$10, garantia_meses=$11,
peso_kg=$12, destacado=$13, es_nuevo=$14
WHERE pk_producto=$15`,
[
data.sku,
data.nombre,
data.slug,
data.descripcion_corta,
data.descripcion,
data.precio,
data.precio_oferta,
data.fk_categoria,
data.fk_marca,
data.modelo,
data.garantia_meses,
data.peso_kg,
data.destacado,
data.es_nuevo,
id
]
),

desactivar: (id) => Conexion.query(
'UPDATE productos SET estado=0 WHERE pk_producto=$1',
[id]
),

activar: (id) => Conexion.query(
'UPDATE productos SET estado=1 WHERE pk_producto=$1',
[id]
),

desaparecer: (id) => Conexion.query(
'DELETE FROM productos WHERE pk_producto=$1',
[id]
)

};