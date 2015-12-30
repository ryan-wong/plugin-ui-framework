var LoginView = function() {

};

LoginView.prototype.getName = function () {
    return 'loginViewComponent';
};

LoginView.prototype.getDefinition = function () {
return {
        controller: ['accountService', function(accountService) {
            this.login = function() {
                accountService.loggedIn();
            }
        }],
        controllerAs: 'vm',
        replace: true,
        scope: false,
        templateUrl: 'plugin/view/login/login.html'
    };
};

LoginView.prototype.getDirective = function() {
    return '<login-view-component></login-view-component>';
};
module.exports = LoginView;