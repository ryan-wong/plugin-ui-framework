//components
var DynamicHtmlDirective = require('./component/DynamicHtml');
var PluginComponentDirective = require('./component/PluginComponent');

//plugins
var Registry = require('./plugin/Registry');

//utility
var HttpService = require('./utility/HttpService');
var Purpose = require('./utility/Purpose');
var Digi = require('./utility/Digi');

//core
var AccountService = require('./AccountService');
var HostController = require('./HostController');

module.exports = angular.module('framework.core', [])
.directive('dynamichtml', ['$compile', DynamicHtmlDirective])
.directive('pluginComponent', [PluginComponentDirective])
.constant('PURPOSE', [Purpose])
.service('digi', [Digi])
.service('httpService', ['$http', '$q', '$rootScope', HttpService])
.service('registryService', [Registry])
.service('accountService', ['httpService', '$rootScope', AccountService])
.controller('hostController', ['accountService', '$scope', HostController])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
        url : '',
        templateUrl: 'core/host.html',
        controller: 'hostController',
        controllerAs: 'vm'
    });
})
.run(function(){

});