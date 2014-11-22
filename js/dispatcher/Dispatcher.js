var Promise = require('es6-promise').Promise;

var merge = require('react/lib/merge');

var Dispatcher = function(){
  this._callbacks = [];
  this._promises = [];
};

Dispatcher.prototype.register = function(callback){
  this._callbacks.push(callback);
  return this._callbacks.length - 1;
};

Dispatcher.prototype.dispatch = function(payload) {
  var resolves = [];
  var rejects = [];
  this._promises = this._callbacks.map(function(_,i){
    return new Promise (function(resolve,reject){
      resolves[i] = resolve;
      rejects[i] = reject;
    });
  });
  this._callbacks.forEach(function(callback,i){
    Promise.resolve(callback(payload)).then(function(){
      resolves[i](payload);
    },function(){
      rejects[i](new Error('Dispatcher callback unsuccessful'));
    });
  });
  this._promises = [];
};

Dispatcher.prototype.waitFor = function(promiseIndexes, callback){
  var selectedPromises = promiseIndexes.map(function(index){
    return this._promises[index];
  }.bind(this));
  return Promise.all(selectedPromises).then(callback);
};

module.exports = Dispatcher;
