var merge = require('react/lib/merge');

var Dispatcher = require('./Dispatcher.js');

var ViewDispatcher = function(){
  Dispatcher.call(this);
};

ViewDispatcher.prototype = Object.create(Dispatcher.prototype);

ViewDispatcher.prototype.constructor = ViewDispatcher;

ViewDispatcher.prototype.handleStoreAction = function(action) {
    this.dispatch({
      source: 'STORE_ACTION',
      action: action
    });

};

module.exports = new ViewDispatcher();
