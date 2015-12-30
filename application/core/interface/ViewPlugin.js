var ViewPlugin = function(view, viewType){
    this._view = view;
    this._viewType = viewType;
};

ViewPlugin.prototype.getType = function () {
    return 'view';
};

ViewPlugin.prototype.getView = function (){
    return this._view;
};

ViewPlugin.prototype.getViewType = function () {
    return this._viewType;
}


module.exports = ViewPlugin;