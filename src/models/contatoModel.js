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
    },
    telefone: {
        type: String,
        required: true,
        minlength: 11
    },
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'usuario'
    }
})

const contatoModel = mongoose.model('contatos', contatoSchema);

module.exports = contatoModel;
