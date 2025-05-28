require('dotenv').config();
const app = require('./app.js');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

mongoose.connect(process.env.CONNECTSTRING)
    .then(() => {
        app.emit('conectado');
        console.log('Servidor mongoose conectado!');
    })
    .catch((err) => {
        console.log(err);
    })

app.on('conectado', () => {
    app.listen(port, () => {
        console.log('http://localhost:3000');
        console.log('Servidor Iniciado!')
    });
})
