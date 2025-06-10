const contatoController = require('./contatoController.js');

exports.telaPrincipal = async (req, res) => {
    const contatos = await contatoController.retornarContatos(req);

    res.render('homeView.ejs', {
        contatos: contatos
    });
    return;
}
