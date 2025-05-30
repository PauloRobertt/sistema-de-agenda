const authService = require("../services/authService");

exports.index = (req, res) =>{
    res.render('authView');
    return;
}

exports.login = (req, res) => {
    res.send('login')
}

exports.register = async (req, res) => {
    const result = await authService.register(req.body);
    res.send(result);
}
