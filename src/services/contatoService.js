const { default: mongoose } = require('mongoose');
const contatoSchema = require('../models/contatoModel.js');

const contatoModel = mongoose.model('contatos', contatoSchema);

module.exports = {

    async findAll() {
        return await contatoModel.find({});
    },

    async findById(id) {
        if (!id) throw new Error('ID é obrigatorio!');

        return await contatoModel.findById(id);
    },

    async createContato(data) {
        try {
            const { nome, sobrenome, email, telefone } = data;

            if (!nome || !sobrenome || !email || !telefone) throw new Error('Todos os campos são obrigatorios!');

            if (telefone.length < 11) throw new Error('Campo telefone precisa ter no minimo 11 caracteres');

            const emailExistente = await contatoModel.find({ email: email }).exec();

            if(emailExistente.length != 0) throw new Error('Email já em uso!');

            const newContato = new contatoModel({
                nome,
                sobrenome,
                email,
                telefone
            })

            return await newContato.save();
        } catch (error) {
            console.log(error);
        }
    },

    async findByIdAndUpdate(data, id){
        try {
            const { nome, sobrenome, email, telefone } = data;

            if(!id) throw new Error('ID é obrigatorio!');
            
            const contatoExistente = await contatoModel.find({ _id: id });

            if(contatoExistente.length === 0) throw new Error('Contato não existe!');

            if (!nome || !sobrenome || !email || !telefone) throw new Error('Todos os campos são obrigatorios!');

            if (telefone.length < 11) throw new Error('Campo telefone precisa ter no minimo 11 caracteres');

            const emailExistente = await contatoModel.find({ email: email }).exec();

            if(emailExistente.length != 0) throw new Error('Email já em uso!');

            return await contatoModel.findByIdAndUpdate(id, {
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                telefone: telefone
            });
        } catch (error) {
            console.log(error);
        }
    },

    async findByIdAndDelete(id) {
        try {
            if (!id) throw new Error('ID é obrigatorio!');
            return await contatoModel.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
        }
    }
}