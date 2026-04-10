const express = require('express');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const cloudinary = require('./cloudinary');
const fs = require('fs');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// ── SEGURIDAD: Headers HTTP protegidos
app.use(helmet());

// ── SEGURIDAD: Límite general (100 peticiones por 15 minutos)
const limiterGeneral = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { error: 'Demasiadas peticiones, intenta en 15 minutos' }
});

// ── SEGURIDAD: Límite estricto para login (10 intentos por 15 minutos)
const limiterLogin = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: 'Demasiados intentos de login, intenta en 15 minutos' }
});

app.use(limiterGeneral);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// configurar multer
const upload = multer({ dest: 'uploads/' });

// 👉 RUTA CORRECTA (FUERA de app.listen)
app.post('/upload', upload.single('imagen'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'productos'
    });

    fs.unlinkSync(req.file.path);

    res.json({
      message: 'Imagen subida correctamente',
      url: result.secure_url,
      public_id: result.public_id
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al subir imagen' });
  }
});

// tus rutas existentes
// ── RUTAS: Catálogo
app.use('/catalogo', require('./routes/catalogo.routes'));
//app.use('/catalogo', require('./routes/catalogo.routes'));
app.use('/categoria', require('./routes/modulocatalogo/categorias.routes'));
app.use('/atributo', require('./routes/modulocatalogo/atributos.routes'));
app.use('/imagen', require('./routes/modulocatalogo/imagenes_producto.routes'));
app.use('/producto-atributo', require('./routes/modulocatalogo/producto_atributos.routes'));
app.use('/producto', require('./routes/modulocatalogo/productos.routes'));
app.use('/marca', require('./routes/modulocatalogo/marcas.routes'));

// levantar servidor
// ── RUTAS: Control de acceso
app.use('/auth/login', limiterLogin); // Rate limit estricto solo en login
app.use('/auth', require('./routes/auth/auth.routes'));
app.use('/roles', require('./routes/auth/roles.routes'));
app.use('/users', require('./routes/auth/users.routes'));

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});