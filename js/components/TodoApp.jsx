// var Footer = require('./Footer.jsx');

var Header = require('./Header.jsx');

var MainSection = require('./MainSection.jsx');

var React = require('react');

var TodoStore = require('../stores/TodoStore.js');

function getTodoState() {
  return {
    allTodos: TodoStore.getAll()
  };
}

var TodoApp = React.createClass({

  getInitialState: function() {
    return getTodoState();
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnMount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <Header />
        <MainSection
          allTodos = {this.state.allTodos} />
    </div>
    );
  },

  _onChange: function() {
    this.setState(getTodoState());
  }

});

module.exports = TodoApp;
