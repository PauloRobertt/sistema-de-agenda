const Contato = require('../services/contatoService.js');

exports.index = (req, res) => {
    res.render('contatoView');
    return;
}

exports.indexEditarContato = async (req, res) => {
    try {
        const contato = new Contato(req.params.id, undefined, req.session.user);
        const contatoID = await contato.findById()

        res.render('editarContatoView.ejs', {
            editContato: contatoID
        });
        return;
    } catch (error) {
        console.log(error);
    }
}

exports.retornarContatos = async (req, res) => {
    try {
        const contato = new Contato(undefined, undefined, req.session.user);
        const contatos = await contato.findAll()
        return contatos;
    } catch (error) {
        console.log(error);
    }
}

exports.retornarContato = async (req, res) => {
    const contato = new Contato(req.params);
    await contato.findById();
}

exports.createContato = async (req, res) => {
    try {
        const contato = new Contato(req.params.id, req.body, req.session.user);
        await contato.createContato();

        req.flash('sucesso', 'Contato adicionado com sucesso!');
        res.redirect('/');
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('/contato/index');
    }
}

exports.findByIdAndUpdate = async (req, res) => {
    try {
        const contato = new Contato(req.params.id, req.body, req.session.user);
        await contato.findByIdAndUpdate();

        req.flash('sucesso', 'Contato editado com sucesso!');
        res.redirect('/');
    } catch (error) {
        req.flash('error', error.message);
        res.redirect(`/contato/edit/${req.params.id}`);
    }
}

exports.findByIdAndDelete = async (req, res) => {
    try {
        const contato = new Contato(req.params.id, undefined, undefined);
        await contato.findByIdAndDelete();

        req.flash('sucesso', 'Contato deletado com sucesso!');
        res.redirect('/');
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('/');
    }
}
