var React = require('react');

var TodoApp = require('./components/TodoApp.jsx');

React.renderComponent(
  <TodoApp />,
  document.getElementById('todoapp')
);
