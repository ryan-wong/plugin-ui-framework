var AccountService = function(httpService, $rootScope){
    this._httpService = httpService;
    this._rootScope = $rootScope;
    this.loginStatus = false;
    this._id = '';
};

AccountService.prototype.isLoggedIn = function() {
    return this.loginStatus;
};

AccountService.prototype.loggedIn = function(accountId) {
    this.loginStatus = true;
    this._id = accountId;
    this._rootScope.$broadcast('login', {
        accountId: this._id
    });
}

AccountService.prototype.logout = function() {
    this.loginStatus = false;
    this._id = '';
    this._rootScope.$broadcast('logout', {});
}



module.exports = AccountService;