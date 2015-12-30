require('./core');
require('./plugin');

var DesktopViewPlugin = require('./plugin/view/desktop/DesktopViewPlugin');
var LoginViewPlugin = require('./plugin/view/login/LoginViewPlugin');

angular.module('framework', [
    'ui.router',
    'framework.core',
    'framework.plugin',
    'templates'

])
.run(['$rootScope', 'registryService', function($rootScope, registryService){
    registryService.register(new DesktopViewPlugin());
    registryService.register(new LoginViewPlugin());
}])
.config(function ($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.otherwise('/login');
});