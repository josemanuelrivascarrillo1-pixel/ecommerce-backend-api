
const Conexion = require('../config/database');

module.exports = {

  // Listar todos los productos activos del catálogo
  listar: () => Conexion.query(
    'SELECT * FROM v_catalogo ORDER BY pk_producto ASC'
  ),

  // Listar solo productos destacados (para el home)
  listarDestacados: () => Conexion.query(
    'SELECT * FROM v_catalogo WHERE destacado = TRUE ORDER BY pk_producto ASC'
  ),

  // Obtener un producto por su slug (para la página de detalle)
  obtenerPorSlug: (slug) => Conexion.query(
    'SELECT * FROM v_catalogo WHERE slug = $1',
    [slug]
  ),

  // Listar productos por categoría
  listarPorCategoria: (categoriaSlug) => Conexion.query(
    'SELECT * FROM v_catalogo WHERE categoria_slug = $1 ORDER BY pk_producto ASC',
    [categoriaSlug]
  )

};