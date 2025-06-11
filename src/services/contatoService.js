const validador = require('validator');
const contatoModel = require('../models/contatoModel.js');
const usuarioModel = require('../models/usuarioModel.js');

module.exports = class Contato {
    constructor(id, body, usuarioLogado) {
        this.id = id;
        this.body = body;
        this.usuario = usuarioLogado;
    }

    async findAll() {
        try {
            if (this.usuario) {
                return await contatoModel.find({ id_usuario: this.usuario.id });
            }
            return;
        } catch (error) {
            throw error;
        }
    }

    async findById() {
        try {
            await this.searchContatoID(this.id);
            return await contatoModel.findById(this.id);
        } catch (error) {
            throw error;
        }
    }

    async createContato() {
        const contato = this.validarCredenciais(this.body);

        const usuarioLogado = this.validarUsuario(this.usuario);

        try {
            const emailExistente = await this.searchContatoEmail(usuarioLogado.id, contato.email);

            if (emailExistente) throw new Error('Email já em uso!');

            const newContato = new contatoModel({
                nome: contato.nome,
                sobrenome: contato.sobrenome,
                email: contato.email,
                telefone: contato.telefone,
                id_usuario: usuarioLogado.id
            })

            return await newContato.save();
        } catch (error) {
            throw error;
        }
    }

    async findByIdAndUpdate() {
        const contatoValidado = this.validarCredenciais(this.body);
        const usuarioLogado = this.validarUsuario(this.usuario);

        try {
            const contatoExistente = await this.searchContatoID(this.id);

            const contatoComMesmoEmail = await this.searchContatoEmail(usuarioLogado.id, contatoValidado.email);

            if (contatoComMesmoEmail && contatoComMesmoEmail._id.toString() !== this.id) {
                throw new Error('E-mail já em uso!');
            }

            return await contatoModel.findByIdAndUpdate(this.id, {
                nome: contatoValidado.nome,
                sobrenome: contatoValidado.sobrenome,
                email: contatoValidado.email,
                telefone: contatoValidado.telefone
            });

        } catch (error) {
            throw error;
        }
    }

    async findByIdAndDelete() {
        try {
            await this.searchContatoID(this.id);

            return await contatoModel.findByIdAndDelete(this.id);
        } catch (error) {
            throw error;
        }
    }

    validarCredenciais(body) {
        const { nome, sobrenome, email, telefone } = body;

        if (!nome || !sobrenome || !email || !telefone) throw new Error('Todos os campos são obrigatórios!');

        if (!validador.isEmail(email)) throw new Error('E-mail ou senha invalidos!');

        if (!validador.isMobilePhone(telefone)) throw new Error("Número de telefone invalido!");

        return body;
    }

    validarUsuario(usuarioLogado) {
        if (!usuarioLogado) throw new Error('Usuario não logado no sistema!');
        return usuarioLogado;
    }

    async searchContatoEmail(id, email) {
        const contato = await contatoModel.findOne({ id_usuario: id, email: email });
        return contato;
    }

    async searchContatoID(id) {
        if (!id || typeof id !== 'string') throw new Error('ID invalido!');

        const contato = await contatoModel.findOne({ _id: id });

        if (!contato) throw new Error('Contato não encontrado!');

        return contato;
    }
}
