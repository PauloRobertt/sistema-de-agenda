const express = require('express');
const router = express.Router();

const { telaHome } = require('../controllers/homeController.js');

router.get('/', telaHome);

module.exports = router;
