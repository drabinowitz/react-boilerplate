var AppDispatcher = require('../dispatcher/AppDispatcher');

var TodoViewActions = require('../actions/TodoViewActions');

var AppViewActions = require('../actions/AppViewActions');

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

TodoStore.dispatcherIndex = (function(){
  var index = AppDispatcher.register(function(payload){
    var action = payload.action;
    var text;

    switch(action.actionType) {
      case TodoConstants.TODO_CREATE:
        text = action.text.trim();
        if (text !== '') {
          create(text);
          TodoViewActions.create(_todos);
        }
        break;

      case TodoConstants.TODO_DESTROY:
        destroy(action.id);
        TodoViewActions.destroy(_todos);
        break;

      case TodoConstants.TODO_READY:
        TodoViewActions.ready(_todos);
        break;

      case TodoConstants.TODO_UPLOAD:
        setTimeout(function(){

          if (Math.round(Math.random())){
            AppViewActions.success('Uploaded!');
          } else {
            AppViewActions.failure('Upload Failed!');
          }

        }.bind(this),3000);
        AppViewActions.loading();
        break;
    }

    return true;
  });
  TodoViewActions.ready(_todos);
  return index;
}.bind(this))();

module.exports = TodoStore;
