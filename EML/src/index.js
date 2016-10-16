// La aplicación

var React = require('react');
var ReactDOM = require('react-dom');
window.jQuery = window.$ = require('jquery/dist/jquery');
require('bootstrap/dist/js/bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap-material-design/dist/js/ripples');
require('bootstrap-material-design/dist/js/material');
require('bootstrap-material-design/dist/css/ripples.min.css');
require('bootstrap-material-design/dist/css/bootstrap-material-design.min.css');
var DisplayTable = require("./DisplayTable.jsx")
var OurButton = require("./OurButton.jsx")


var task = {
  participants: ["Arslaan", "Juan", "Lluc"],
  states: ["candidate", "candidate", "candidate"]
}

var STATES = {
  CANDIDATE: "candidate",
  CURRENT: "current",
  DONE: "done"
}

var colors = {};
colors[STATES.CANDIDATE] = "active";
colors[STATES.CURRENT] = "success";
colors[STATES.DONE] = "warning";



var App = React.createClass({
  getInitialState: function() {
    return {
      states: task.states
    };
  },

  enhancedRandomizer: function () {
    var candidates = []

    task.participants.map(function(name, i){
      if(task.states[i] == STATES.CANDIDATE) {
        candidates.push(i)
      }
    });
    

    //Reload: when no candidates, we set every particpant to "candidate" state.
    if (candidates.length == 0) {
      task.states.map(function(state, i){
        task.states[i] = STATES.CANDIDATE
      })  
    }

    else {
      task.participants.map(function(name, i){
        if(task.states[i] == STATES.CURRENT){
          task.states[i] = STATES.DONE
        }
      });

    }


    //Randomizer: from "candidates" we select new "current"
    task.states[candidates[Math.floor(candidates.length * Math.random())]] = STATES.CURRENT;
    this.setState({states: task.states})


  },


  render: function () {
    return (
      <div>
        <DisplayTable elements={task.participants} colors={colors} states={this.state.states}/>
        <OurButton onClick={this.enhancedRandomizer} />
      </div>

      )
  }
});


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

window.$.material.init();

window.$.material.ripples();