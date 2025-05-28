const contatoService = require('../services/contatoService.js');

exports.index = (req, res) =>{
    res.render('contatoView');
    return;
}

exports.indexEditarContato = async (req, res) => {
    const contato = await contatoService.findById(req.params.id);
    res.render('editarContatoView.ejs', {
        editContato: contato
    });
    return;
}

exports.retornarContatos = async (req, res) => {
    const contatos = await contatoService.findAll()
    res.send(contatos);
}

exports.retornarContato = async (req, res) => {
    const contato = await contatoService.findById(req.params.id)
    res.send(contato);
}

exports.criarContato = async (req, res) => {
    const result = await contatoService.createContato(req.body);
    res.send(result);
}

exports.editContato = async (req, res) => {
    const result = await contatoService.findByIdAndUpdate(req.body, req.params.id);
    res.send(result);
}

exports.deletarContato =  async (req, res) => {
    const result = await contatoService.findByIdAndDelete(req.params.id);
    res.send(result);
}
