var AppDispatcher = require('../dispatcher/AppDispatcher');

var TodoConstants = require('../constants/TodoConstants');

var TodoActions = {

  create: function(text){
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.TODO_CREATE,
      text: text
    });
  },

  destroy: function(id){
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.TODO_DESTROY,
      id:id
    });
  },

  ready: function(){
    AppDispatcher.handleViewAction({
      actionType: TodoConstants.TODO_READY
    });
  }

};

module.exports = TodoActions;
