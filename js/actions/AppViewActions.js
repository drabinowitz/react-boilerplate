var ViewDispatcher = require('../dispatcher/ViewDispatcher');

var AppViewConstants = require('../constants/AppViewConstants');

//since our stores are no longer emitting events directly to our views
//we can add top level convenience views that listen on generic store messages
//these actions represent standard uploading/downloading, success messages, and error messages
var AppViewActions = {

  loading: function(){
    ViewDispatcher.handleStoreAction({
      actionType: AppViewConstants.LOADING,
    });
  },

  success: function(message){
    ViewDispatcher.handleStoreAction({
      actionType: AppViewConstants.SUCCESS,
      message: message
    });
  },

  failure: function(message){
    ViewDispatcher.handleStoreAction({
      actionType: AppViewConstants.FAILURE,
      message: message
    });
  }

};

module.exports = AppViewActions;
