var IView = function() {

};

IView.prototype.getName = function () {
    throw new Error('Not Implemented');
};

IView.prototype.getDefinition = function () {
    throw new Error('Not Implemented');
};

IView.prototype.getDirective = function() {
    throw new Error('Not Implemented');
};
module.exports = IView;