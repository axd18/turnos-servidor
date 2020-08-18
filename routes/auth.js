// Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

// Cre un usuario
// api/auth
router.post('/',
    [
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El passwprd debe ser mínimo de 6 caracteres').isLength({min : 6})
    ],
    authController.autenticarUsuario
);

module.exports = router;