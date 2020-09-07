const mongoose = require('mongoose');

const TurnoSchema = mongoose.Schema({
    mascota: {
        type: String,
        required: true,
        trim: true
    },
    servicio: {
        type: String,
        required: true,
        trim: true
    },
    profesional: {
        type: String,
        required: true,
        trim: true
    },
    datepicker: {
        type: String
    },
    creador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    creado: {
        type: Date,
        default: Date.now()
    }
});

module.exports =  mongoose.model('Turno', TurnoSchema );