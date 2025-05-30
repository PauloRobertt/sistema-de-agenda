const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController.js');
const contatoController = require('../controllers/contatoController.js');
const authController = require('../controllers/authController.js');

router.get('/', homeController.telaPrincipal);
router.get('/contato/index', contatoController.index);
router.get('/contato/edit/:id', contatoController.indexEditarContato);
router.get('/auth/index', authController.index);

router.get('/contato', contatoController.retornarContatos);
router.get('/contato/:id', contatoController.retornarContato);
router.post('/contato', contatoController.criarContato);
router.put('/contato/:id', contatoController.editContato);
router.delete('/contato/:id', contatoController.deletarContato);

router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);

module.exports = router;
