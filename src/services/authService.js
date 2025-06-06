const usuarioModel = require('../models/usuarioModel.js');
const validator = require('validator');
const bcrypt = require('bcrypt');

module.exports = {
    async login(data) {
        try {
            const { email, senha } = data;

            if (!email || !senha) throw new Error('Todos os campo são obrigatorios!');

            if (!validator.isEmail(email)) throw new Error('E-mail invalido!');

            const user = await usuarioModel.findOne({ email: email });

            if(!user) throw new Error('E-mail não encontrado!');

            const passwordCompare = await bcrypt.compare(senha, user.senha);

            if (!passwordCompare) {
                throw new Error('Senha incorreta!');
            }

            return user;
        } catch (error) {
            throw error;
        }
    },

    async register(data) {
        try {
            const { email, senha } = data;

            if (!email || !senha) throw new Error('Todos os campo são obrigatorios!');

            if(!validator.isEmail(email)) throw new Error('E-mail invalido!')

            const emailExistente = await usuarioModel.find({ email: email });

            if (emailExistente.length != 0) throw new Error('E-mail já em uso!');

            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const senhaHash = bcrypt.hashSync(senha, salt);

            const newUsuario = new usuarioModel({
                email: email,
                senha: senhaHash
            });

            return await newUsuario.save();   
        } catch (error) {
            throw error;
        }
    }
}
