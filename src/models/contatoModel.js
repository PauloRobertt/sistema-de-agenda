const mongoose = require('mongoose');

const contatoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        maxlength: 50
    },
    sobrenome: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        maxlength: 50
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
