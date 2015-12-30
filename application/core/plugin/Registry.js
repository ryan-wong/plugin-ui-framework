/**
 * Created by ryanwong on 2015-11-17.
 */

var Purpose = require('../utility/Purpose');
var Registry = function () {
    this._pluginList = {
        viewPlugin: {}
    };
};


Registry.prototype.register = function(plugin){
    switch(plugin.getType()){
        case 'view':
            this._setupViewPlugin(plugin);
            break;
        case 'model':
            this._setupModelViewPlugin(plugin);
            break;
    }

};

Registry.prototype.deregister = function(modelType){
    var purposes = Object.keys(Purpose);
    for(var i = 0; i < purposes.length; i++){
        if (this._pluginList[purposes[i]].hasOwnProperty(modelType)){
            delete this._pluginList[purpose[i]][modelType];
        }
    }
};

Registry.prototype.getPlugin = function( modelType, purpose) {
    if (this._pluginList[purpose] &&
        this._pluginList[purpose][modelType]){
        return this._pluginList[purpose][modelType];
    }
};

Registry.prototype._setupModelViewPlugin = function(modelViewPlugin) {
    var purpose = modelViewPlugin.getPurpose(),
        modelType = modelViewPlugin.getModelType();

    if (!purpose || !modelType) {
        throw new Error('Cannot register invalid plugin: ', purpose, modelType);
    }

    if (this._pluginList[purpose] === undefined){
        this._pluginList[purpose] = null;
    }

    if (this._pluginList[purpose][modelType] === undefined) {
        this._pluginList[purpose][modelType] = null;
    }

    this._pluginList[purpose][modelType] = modelViewPlugin;
};

Registry.prototype._setupViewPlugin = function(viewPlugin) {
    var viewType = viewPlugin.getViewType();

    if (!viewType) {
        throw new Error('Cannot register invalid plugin: ', viewType);
    }

    if (this._pluginList.viewPlugin[viewType] === undefined) {
        this._pluginList.viewPlugin[viewType] = null;
    }

    this._pluginList.viewPlugin[viewType] = viewPlugin;
};


module.exports = Registry;