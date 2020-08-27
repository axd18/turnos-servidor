const Turno = require('../models/Turno');
const { validationResult } = require('express-validator');

exports.crearProyecto = async (req, res) => {

    // Revisar si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array() })
    }


    try {
        // Crear un nuevo turno
        const turno = new Turno(req.body);

        // Guardar el creador via JWT
        turno.creador = req.usuario.id;

        // guardamos el proyecto
        turno.save();
        res.json(turno);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Obtiene todos los proyectos del usuario actual
exports.obtenerTurnos = async (req, res) => {
    try {
        const turnos = await Turno.find({ creador: req.usuario.id }).sort({ creado: -1 });
        res.json({ turnos });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
