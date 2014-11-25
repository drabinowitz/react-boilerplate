var React = require('react');

var ViewDispatcher = require('../dispatcher/ViewDispatcher');

var AppViewConstants = require('../constants/AppViewConstants');

var AppManager = React.createClass({

  getInitialState: function(){
    return {};
  },

  componentDidMount: function(){
    ViewDispatcher.register(function(payload){
      var action = payload.action;

      switch(action.actionType) {

        case AppViewConstants.LOADING:
          this.replaceState({loading: true});
          break;

        case AppViewConstants.SUCCESS:
          this.replaceState({success: action.message});
          setTimeout(function(){
            this.setState({success: null});
          }.bind(this),2000);
          break;

        case AppViewConstants.FAILURE:
          this.replaceState({failure: action.message});
          setTimeout(function(){
            this.setState({failure: null});
          }.bind(this),2000);
          break;
      }

      return true;
    }.bind(this));
  },

  render: function(){
    var component = <div></div>
    if (this.state.loading){
      component = <img src={'./assets/spiffygif_46x46.gif'} />
    } else if (this.state.success){
      component = <p>{this.state.success}</p>
    } else if (this.state.failure){
      component = <p>{this.state.failure}</p>
    }
    return (
      <div>
        {component}
      </div>
    );
  }

});

module.exports = AppManager;
