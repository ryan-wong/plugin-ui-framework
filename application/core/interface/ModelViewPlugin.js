var ViewPlugin = require('./ViewPlugin');
var Digi = require('../utility/Digi');
var ModelViewPlugin = function(purpose, view, modelType){
    ModelViewPlugin.super_.apply(this, [view, '']);
    this._modelType = modelType;
    this._purpose = purpose;
};

Digi.inherits(ModelViewPlugin, ViewPlugin);

ModelViewPlugin.prototype.getModelType = function (){
    return this._modelType;
};

ModelViewPlugin.prototype.getType = function () {
    return 'model';
};

ModelViewPlugin.prototype.getPurpose = function () {
    return this._purpose;
};

module.exports = ModelViewPlugin;