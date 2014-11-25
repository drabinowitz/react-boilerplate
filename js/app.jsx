var React = require('react');

var TodoStore = require('./stores/TodoStore');

var TodoApp = require('./components/TodoApp.jsx');

var AppManager = require('./components/AppManager.jsx')

React.renderComponent(
  <AppManager />,
  document.getElementById('appmanager')
);

React.renderComponent(
  <TodoApp />,
  document.getElementById('todoapp')
);
