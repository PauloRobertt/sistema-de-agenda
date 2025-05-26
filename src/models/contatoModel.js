const mongoose = require('mongoose');

const contatoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    sobrenome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    telefone: {
        type: String,
        required: true,
        minlength: 11
    }
})

module.exports = contatoSchema;
