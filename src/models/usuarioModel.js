const { default: mongoose } = require("mongoose")

const usuarioSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    
    senha: {
        type: String,
        required: true
    }
})

const usuarioModel = mongoose.model('usuario', usuarioSchema);

module.exports = usuarioModel;
