const express = require('express');
const router = express.Router();

const { retornarContato } = require('./controllers/contatoController.js');

router.get('/', retornarContato);

module.exports = router;
