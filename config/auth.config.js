require('dotenv').config();

module.exports = {
    jwt: {
        secret: process.env.JWT_SECRET || 'clave_por_defecto',
        expiresIn: process.env.JWT_EXPIRES_IN || '8h'
    },

    bcrypt: {
        saltRounds: 10
    },

    session: {
        maxAge: 8 * 60 * 60 * 1000
    },

    publicRoutes: [
        '/auth/login',
        '/'
    ]
};