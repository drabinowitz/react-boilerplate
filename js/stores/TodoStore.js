var AppDispatcher = require('../dispatcher/AppDispatcher');

var TodoViewActions = require('../actions/TodoViewActions.js');

var TodoConstants = require('../constants/TodoConstants');

var _todos = {};

function create(text) {
  var id = Date.now();
  _todos[id] = {
    id: id,
    complete: false,
    text: text
  };
}

function destroy(id) {
  delete _todos[id];
}

var TodoStore = {};

var getAll = function() {
  return _todos;
};

TodoStore.dispatcherIndex = (function(){
  var index = AppDispatcher.register(function(payload){
    var action = payload.action;
    var text;

    switch(action.actionType) {
      case TodoConstants.TODO_CREATE:
        text = action.text.trim();
        if (text !== '') {
          create(text);
          TodoViewActions.create(getAll());
        }
        break;

      case TodoConstants.TODO_DESTROY:
        destroy(action.id);
        TodoViewActions.destroy(getAll());
        break;

      case TodoConstants.TODO_READY:
        TodoViewActions.ready(getAll());
        break;
    }

    return true;
  });
  TodoViewActions.ready(getAll());
  return index;
}.bind(this))();

module.exports = TodoStore;
