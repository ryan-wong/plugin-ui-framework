var HostController = function(accountService, $scope, purpose) {
    this._accountService = accountService;
    this._scope = $scope;
    this.allowedViews = {
        login: 'view.login',
        desktop: 'view.desktop'
    };
    this.view = this.whichView();
    this.purpose = purpose;

    this._scope.$watch(function() {
        return this._accountService.loginStatus;
    }.bind(this), function(newVal){
        console.log('login status', newVal);
        this.view = this.whichView();
    }.bind(this), true);
};

HostController.prototype.whichView = function() {
    return (this._accountService.loginStatus)?this.allowedViews.desktop:this.allowedViews.login;
};

HostController.prototype.loggedIn = function() {
    this._accountService.loggedIn('aqwqeqw');
}

module.exports = HostController;