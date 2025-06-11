exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render('404.ejs');
    }

    next();
}

exports.csrfMiddlware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.middlewareMessage = (req, res, next) => {
    res.locals.error = req.flash('error');
    res.locals.sucesso = req.flash('sucesso');
    res.locals.user = req.session.user;
    next();
}

exports.loginRequired = (req, res, next) =>{
    if (!req.session.user){
        req.flash('error', 'Você precisa estar logado no sistema para ter acesso!');
        res.redirect('/');
        return;
    };
    next();
}
