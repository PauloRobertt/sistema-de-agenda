const usuarioModel = require('../models/usuarioModel.js');
const validator = require('validator');
const bcrypt = require('bcrypt');

module.exports = class Authentication{
    constructor(body){
        this.body = body;
    }

    async login(){
        const userBody = this.validarCredenciais(this.body);

        const user = await this.searchUser(userBody.email);

        const passwordCompare = await bcrypt.compare(userBody.senha, user.senha);

        if (!passwordCompare) throw new Error('E-mail ou senha invalidos!');

        return user;
    };

    async register(){
        const userBody = this.validarCredenciais(this.body);

        await this.checkUser(userBody.email);

        const senhaHash = this.criptografia(userBody.senha);

        const newUser = new usuarioModel({
            email: userBody.email,
            senha: senhaHash
        });

        return await newUser.save();   
    };

    criptografia(password){
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        return bcrypt.hashSync(password, salt);;
    }

    validarCredenciais(data){
        const { email, senha } = data;

        if (!email || !senha) throw new Error('Todos os campos são obrigatórios!');

        if(!validator.isEmail(email)) throw new Error('E-mail ou senha invalidos!');

        if (senha.length < 8 || senha.length > 64) throw new Error('A senha deve ter entre 8 e 64 caracteres');

        return { email, senha };
    };

    async checkUser(email){
        const user = await usuarioModel.findOne({ email: email });

        if(user) throw new Error('E-mail já existe!');

        return;
    }

    async searchUser(email){
        const user = await usuarioModel.findOne({ email: email });

        if(!user) throw new Error('E-mail não encontrado!');

        return user;
    }
};
