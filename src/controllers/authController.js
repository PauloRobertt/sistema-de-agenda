const authService = require("../services/authService");

exports.index = (req, res) => {
    if (req.session.user) return res.render('authViewLogado');
    res.render('authView');
    return;
}

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
    return;
}

exports.login = async (req, res) => {
    try {
        const result = await authService.login(req.body);
        req.session.user = result;
        req.session.save(() => {
            req.flash('sucesso', 'Usuario logado com sucesso!');
            res.redirect('/auth/index');
        })
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('/auth/index');
    }
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
