var DesktopView = function() {

};

DesktopView.prototype.getName = function () {
    return 'desktopViewComponent';
};

DesktopView.prototype.getDefinition = function () {
return {
        controller: [function() {

        }],
        controllerAs: 'vm',
        replace: true,
        scope: false,
        templateUrl: 'plugin/view/desktop/desktop.html'
    };
};

DesktopView.prototype.getDirective = function() {
    return '<desktop-view-component></desktop-view-component>';
};
module.exports = DesktopView;