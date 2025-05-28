const contatoService = require('../services/contatoService.js');

exports.telaPrincipal = async (req, res) => {
    const contatos = await contatoService.findAll();
    res.render('homeView.ejs', {
        contatos: contatos
    });
    return;
}
