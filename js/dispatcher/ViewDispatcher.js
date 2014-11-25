var Dispatcher = require('./Dispatcher');

var ViewDispatcher = function(){
  Dispatcher.call(this);
  this.queuedActions = {};
  this.actionsToDispatch = [];
  this.dispatchReady = false;
};

ViewDispatcher.prototype = Object.create(Dispatcher.prototype);

ViewDispatcher.prototype.constructor = ViewDispatcher;

ViewDispatcher.prototype.handleStoreAction = function(action) {

  //is the action already queued? if so do nothing
  if (this.queuedActions[action]){ return 'already queued'; }

  //add action to hash
  this.queuedActions[action] = true;

  //push action to array so events will be dispatched in order
  this.actionsToDispatch.push(action);

  //is a viewdispatch readied
  if (!this.dispatchReady){

    //if not ready a view dispatch to go off in 100 ms
    setTimeout(function(){

      //reset action hash, action array, and ready state before dispatching
      this.queuedActions = {};
      var actions = this.actionsToDispatch;
      this.actionsToDispatch = [];
      this.dispatchReady = false;

      //loop through actions and dispatch in order
      for (var i = 0; i < actions.length ; i++){
        this.dispatch({
          source: 'STORE_ACTION',
          action: actions[i]
        });
      }
    }.bind(this),100);

    //after readying a dispatch update dispatch ready state
    this.dispatchReady = true;

  }


};

module.exports = new ViewDispatcher();
