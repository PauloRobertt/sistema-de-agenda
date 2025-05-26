const { default: mongoose } = require('mongoose');
const contatoSchema = require('../models/contatoModel.js');

const contatoModel = mongoose.model('contatos', contatoSchema);

module.exports = {

    async findAll() {
        return await contatoModel.find({});
    },

    findById() { }
}