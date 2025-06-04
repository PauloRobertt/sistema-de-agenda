const authService = require("../services/authService");

exports.index = (req, res) => {
    res.render('authView');
    return;
}

exports.login = (req, res) => {
    res.send('login')
}

exports.register = async (req, res) => {
    try {
        const result = await authService.register(req.body);
        req.flash('sucesso', 'Usuario registrado com sucesso!');
        res.redirect('/auth/index');
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('/auth/index');
    }
}
