var merge = require('react/lib/merge');

var Dispatcher = require('./Dispatcher.js');

var AppDispatcher = function(){
  Dispatcher.call(this);
};

AppDispatcher.prototype = Object.create(Dispatcher.prototype);

AppDispatcher.prototype.constructor = AppDispatcher;

AppDispatcher.prototype.handleViewAction = function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });

};

module.exports = new AppDispatcher();
