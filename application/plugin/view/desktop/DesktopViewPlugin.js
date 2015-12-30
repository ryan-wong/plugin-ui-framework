var ViewPlugin = require('../../../core/interface/ViewPlugin');
var Digi = require('../../../core/utility/Digi');
var DesktopView = require('./DesktopView');
var DesktopViewPlugin = function(){
    DesktopViewPlugin.super_.apply(this, [
        new DesktopView(),
        'view.desktop'
    ]);
};

Digi.inherits(DesktopViewPlugin, ViewPlugin);

module.exports = DesktopViewPlugin;