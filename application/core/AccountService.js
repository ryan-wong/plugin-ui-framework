var AccountService = function(httpService){
    this._httpService = httpService;
    this.loginStatus = false;
    this._id = '';
};

AccountService.prototype.isLoggedIn = function() {
    return this.loginStatus;
};

AccountService.prototype.loggedIn = function(accountId) {
    this.loginStatus = true;
    this._id = accountId;
}



module.exports = AccountService;