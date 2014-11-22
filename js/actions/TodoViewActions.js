var ViewDispatcher = require('../dispatcher/ViewDispatcher');

var TodoViewConstants = require('../constants/TodoViewConstants');

var TodoViewActions = {

  create: function(todos){
    ViewDispatcher.handleStoreAction({
      actionType: TodoViewConstants.TODO_VIEW_CREATE,
      todos: todos
    });
  },

  destroy: function(todos){
    ViewDispatcher.handleStoreAction({
      actionType: TodoViewConstants.TODO_VIEW_DESTROY,
      todos: todos
    });
  },

  ready: function(todos){
    ViewDispatcher.handleStoreAction({
      actionType: TodoViewConstants.TODO_VIEW_READY,
      todos: todos
    });
  }

};

module.exports = TodoViewActions;
