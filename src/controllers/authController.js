const Authentication = require('../services/authService.js');

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
        const auth = new Authentication(req.body);

        const result = await auth.login();

        req.session.user = {
            id: result._id,
            email: result.email
        };

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
        const auth = new Authentication(req.body);
        await auth.register();

        req.flash('sucesso', 'Usuario registrado com sucesso!');
        res.redirect('/auth/index');
    } catch (error) {
        req.flash('error', error.message);
        res.redirect('/auth/index');
    }
}
