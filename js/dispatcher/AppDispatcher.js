var merge = require('react/lib/merge');

var Dispatcher = require('./Dispatcher.js');

var AppDispatcher = merge(Dispatcher, {

  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }

});

module.exports = AppDispatcher;
