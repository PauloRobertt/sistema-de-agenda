const { default: mongoose } = require("mongoose")

const usuarioSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    
    senha: {
        type: String,
        required: true
    }
})

const usuarioModel = mongoose.model('usuario', usuarioSchema);

module.exports = usuarioModel;
