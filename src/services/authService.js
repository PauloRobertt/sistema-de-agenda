const usuarioModel = require('../models/usuarioModel.js');

module.exports = {
    login() { },

    async register(data) {
        try {
            const { email, senha } = data;

            if (!email || !senha) throw new Error('Todos os campo são obrigatorios!');

            const emailExistente = await usuarioModel.find({ email: email });

            if (emailExistente.length != 0) throw new Error('E-mail já em uso!');

            const bcrypt = require('bcrypt');

            const saltRounds = 10;
            const salt = bcrypt.genSaltSync(saltRounds);
            const senhaHash = bcrypt.hashSync(senha, salt);

            const newUsuario = new usuarioModel({
                email: email,
                senha: senhaHash
            });

            return await newUsuario.save();   
        } catch (error) {
            console.log(error);
        }
    }
}
