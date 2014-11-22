var React = require('react');

var TodoStore = require('./stores/TodoStore');

var TodoApp = require('./components/TodoApp.jsx');

React.renderComponent(
  <TodoApp />,
  document.getElementById('todoapp')
);
