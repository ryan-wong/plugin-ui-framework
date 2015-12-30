var Digi = require('../utility/Digi');
var PluginComponent = function () {
    return {
        restrict: 'E',
        template: '<div dynamichtml="component"></div>',
        scope: {
            model: '=',
            options: '=',
            purpose: '='
        },
        controller: function (registryService, $scope) {
            var identifier = '',
                plugin,
                purpose;

            if (Digi.isString($scope.model)) {
                identifier = $scope.model;
                purpose = 'viewPlugin';
            } else {
                identifier = $scope.model.getModelType();
                purpose = $scope.purpose;
            }

            plugin = registryService.getPlugin(identifier, purpose);

            if (!Digi.isDefined(plugin)) {
                $scope.component = '';
                console.log("PluginComponent: Plugin is not registered: ", identifier);
            } else {
                $scope.component = plugin.getView().getDirective();
            }
        }
    };
};

module.exports = PluginComponent;