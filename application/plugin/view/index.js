var LoginView = require('./login/LoginView');
var DesktopView = require('./desktop/DesktopView');

var login = new LoginView();
var desktop = new DesktopView();

module.exports = angular.module('framework.plugin.view', [])
.directive(login.getName(), [function(){ return login.getDefinition()}])
.directive(desktop.getName(), [function(){ return desktop.getDefinition()}])
.run(function(){});