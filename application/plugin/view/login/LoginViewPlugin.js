var ViewPlugin = require('../../../core/interface/ViewPlugin');
var Digi = require('../../../core/utility/Digi');
var LoginView = require('./LoginView');
var LoginViewPlugin = function(){
    LoginViewPlugin.super_.apply(this, [
        new LoginView(),
        'view.login'
    ]);
};

Digi.inherits(LoginViewPlugin, ViewPlugin);

module.exports = LoginViewPlugin;