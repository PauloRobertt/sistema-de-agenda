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