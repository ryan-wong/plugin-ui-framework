var HttpService = function ($http, promiseLib, $rootScope) {
    this._promise = promiseLib;
    this._http = $http;
    this._rootScope = $rootScope;
};

HttpService.prototype.getDeferred = function() {
    return this._promise.defer();
};

HttpService.prototype.doGet = function (url) {
    var deferred = this.getDeferred();
    this._http.get(url)
        .success(function (result) {
            //can add processing here
            deferred.resolve(result);
        })
        .error(function(err){
            //can add processing here
            deferred.reject(err);
        });
    return deferred.promise;
};

HttpService.prototype.doPost = function (url, data) {
    var deferred = this.getDeferred();
    this._http.post(url, data)
        .success(function (result) {
            //can add processing here
            deferred.resolve(result);
        })
        .error(function(err){
            //can add processing here
            deferred.reject(err);
        });
    return deferred.promise;
};

HttpService.prototype.doDelete = function (url) {
    var deferred = this.getDeferred();
    this._http.delete(url)
        .success(function (data) {
            //can add processing here
            deferred.resolve(data);
        })
        .error(function(err){
            //can add processing here
            deferred.reject(err);
        });
    return deferred.promise;
};

HttpService.prototype.doPut = function (url, data) {
    var deferred = this.getDeferred();
    var put = this._http.put(url, data);
    if (!data){
        put = this._http.put(url, {});
    }
    put.success(function (result) {
        //can add processing here
        deferred.resolve(result);
    }).error(function(err){
        //can add processing here
        deferred.reject(err);
    });
    return deferred.promise;
};

module.exports = HttpService;