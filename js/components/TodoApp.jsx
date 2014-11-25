var Header = require('./Header.jsx');

var MainSection = require('./MainSection.jsx');

var React = require('react');

var ViewDispatcher = require('../dispatcher/ViewDispatcher');

var TodoViewConstants = require('../constants/TodoViewConstants');

var TodoActions = require('../actions/TodoActions.js');

var uploadMessages = function(){
  TodoActions.upload();
};

var TodoApp = React.createClass({

  getInitialState: function() {
    return {allTodos:{}};
  },

  componentDidMount: function() {
    ViewDispatcher.register(function(payload){
      var action = payload.action;

      switch(action.actionType) {

        case TodoViewConstants.TODO_VIEW_CREATE:
          this.setState({allTodos: action.todos});
          break;

        case TodoViewConstants.TODO_VIEW_DESTROY:
          this.setState({allTodos: action.todos});
          break;

        case TodoViewConstants.TODO_VIEW_READY:
          this.setState({allTodos: action.todos});
          break;
      }

      return true;
    }.bind(this));

    TodoActions.ready();
  },

  render: function() {
    return (
      <div>

        <button
          onClick = {uploadMessages}>
            upload
        </button>

        <Header />

        <MainSection
          allTodos = {this.state.allTodos} />

      </div>
    );
  }

});

module.exports = TodoApp;
