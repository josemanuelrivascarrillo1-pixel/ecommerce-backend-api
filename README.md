# Este proyecto usa variables de entorno para la configuración. No se incluyen credenciales reales por seguridad.

## LEER ESTO ANTES DE EJECUTAR

## Requisitos previos
- Node.js v18 o superior
- PostgreSQL (o cuenta en Supabase)

---

## Instalación

### 1. Instalar dependencias:
```bash
npm install
```

> Esto instala todo automáticamente lo que ya están en el `package.json`.

### 2. Crear el archivo `.env` basándote en `.env.example`:
```bash
cp .env.example .env
```

### 3. Configurar el archivo `.env`:
```env
DB_HOST=tu_host
DB_NAME=tu_base_de_datos
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_SSL=true
JWT_SECRET=una_clave_secreta_larga
```

### 4. Iniciar el servidor:
```bash
node app.js
```

### 5. Abrir Postman:
```
http://localhost:3000
```

---


