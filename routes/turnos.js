const express = require('express');
const router = express.Router();
const turnoController = require('../controllers/turnoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');


// Crea turnos
// api/turnos
router.post('/', 
    auth,
    [
        check('nombre', 'El nombre del proyecto es obligatoio').not().isEmpty()
    ],
    turnoController.crearTurno
);

// Obtener todos los turnos
router.get('/', 
    auth,
    turnoController.obtenerTurnos
)



module.exports = router;