/**
 * Created by bardiakhosravi on 2015-11-22.
 */
"use strict";
var _ = require('underscore');

var Digi = function () {};

Digi.isBoolean = function (value) {
    return typeof value === 'boolean';
};


Digi.isString = function (value) {
    return typeof value === 'string';
};


Digi.isDefined = function (value) {
    return typeof value !== 'undefined';
};

Digi.isNumber = function (value) {
    return typeof value === 'number';
};

Digi.isArray = function(value) {
    return toString.call(value) === '[object Array]';
};

Digi.inherits = function (childClass, parentClass) {
    childClass.super_ = parentClass;
    childClass.prototype = Object.create(parentClass.prototype, {
        constructor: {
            value: childClass,
            enumerable: false
        }
    });
};

Digi.inArray = function (needle, haystack) {
    return haystack.indexOf((needle)) > -1;
};

Digi.String = {

    capitalizeFirstLetter: function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};

Digi.Schema = {
    isArrayProperty: function(p) {
        return p && p.hasOwnProperty("type") && p.type === 'array';
    },

    isRefProperty: function (p) {
        return p && p.hasOwnProperty("$ref");
    },

    isObjectProperty: function(p) {
        return p && p.hasOwnProperty('type') && p.type === 'object';
    },

    /**
     * returns the list of types that are possible types that can be added to the association defined by
     * arrayPropertyTypeKey in the schema provided.
     * @param schema
     * @param arrayPropertyTypeKey
     * @returns {*}
     */
    getAnyOfList: function(schema, arrayPropertyTypeKey) {
        var property = schema[arrayPropertyTypeKey];

        if (Digi.Schema.isArrayProperty(property)) {
            return _.map(property.anyOf, function(refObject) {
                return refObject.$ref;
            });
        }

        return null;
    }
};

Digi.Namespace = {
    /**
     * Given a parent name space object and a dot delimited string of new namespaces this method
     * extends the parent name space with the new name space provided
     * @param parent the parent namespace object. should not be undefined.
     * @param nsString e.g. "a.b.c"
     * @returns parent namespace that is augmented with the new namespaces
     */
    extend: function (parent, nsString) {
        var names = nsString.split('.');

        for (var i = 0; i < names.length; i++) {
            if (!Digi.isDefined(parent[names[i]])) {
                parent[names[i]] = {};
            }
            parent = parent[names[i]];
        }

        return parent;
    }
};

Digi.Array = {
    /**
     * return the last element of the array
     * @param arr
     * @returns {*|_ChainSingle<T>|T}
     */
    lastElement: function (arr) {
        return arr.slice(-1).pop();
    }
};

Digi.Function = {
    /**
     * Create a new function from the provided `fn`, the arguments of which are pre-set to `args`.
     * New arguments passed to the newly created callback when it's invoked are appended after the pre-set ones.
     * This is especially useful when creating callbacks.
     *
     * For example:
     *
     *     var originalFunction = function(args){
     *         alert(args.join(' '));
     *     };
     *
     *     var callback = Digi.Function.pass(originalFunction, ['Hello', 'World']);
     *
     *     callback(); // alerts 'Hello World'
     *     callback('by Me'); // alerts 'Hello World by Me'
     *
     * @param fn The original function
     * @param args arguments to pass to the new function. Should be an array
     * @param scope scope of the function
     * @returns {Function}
     */
    pass: function (fn, args, scope) {
        return function () {
            var fnArgs = args.slice();
            fnArgs.push.apply(fnArgs, arguments);
            return fn.apply(scope || this, fnArgs);
        };
    }

};

Digi.Class = {
    /**
     *
     * @param theClass a function
     * @param theInterface a mixin
     */
    implements: function (theClass, theInterface) {
        _.extend(theClass, theInterface);
    }
};

Digi.Promise = {

};

module.exports = Digi;