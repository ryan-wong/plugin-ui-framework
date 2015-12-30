var HostController = function(accountService, $scope, purpose) {
    this._accountService = accountService;
    this._scope = $scope;
    this.allowedViews = {
        login: 'view.login',
        desktop: 'view.desktop'
    };
    this.view = this.whichView();
    this.purpose = purpose;

    this._scope.$on('login', function (event, data) {
      this.view = this.allowedViews.desktop;
    }.bind(this));

    this._scope.$on('logout', function (event, data) {
      this.view = this.allowedViews.login;
    }.bind(this));
};

HostController.prototype.whichView = function() {
    return (this._accountService.loginStatus)?this.allowedViews.desktop:this.allowedViews.login;
};

module.exports = HostController;