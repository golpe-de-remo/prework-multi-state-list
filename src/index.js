var React = require('react');
var ReactDOM = require('react-dom');
var PeopleTable = require('./app/PeopleTable');
var SimpleButton = require('./app/SimpleButton');
var _ = require('underscore');

var STATE = require('./app/TaskState').state;
window.jQuery = require('jquery/dist/jquery');
window.$ = require('jquery/dist/jquery');
require('bootstrap/dist/js/bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap-material-design/dist/js/ripples');
require('bootstrap-material-design/dist/js/material');
require('bootstrap-material-design/dist/css/ripples.min.css');
require('bootstrap-material-design/dist/css/bootstrap-material-design.min.css');

require('./index.css');

var people = [
  {
    name: "Elliot",
    state: STATE.TODO
  },
  {
    name: "Juan",
    state: STATE.TODO
  },
  {
    name: "Lluc",
    state: STATE.TODO
  },
  {
    name: "Arslaan",
    state: STATE.TODO
  }];

var App = React.createClass({
  getInitialState() {
    return {
      people: this.props.people
    };
  },
  propTypes: {
    people: React.PropTypes.array
  },
  handleClick: function () {
    var people = this.state.people;
    var todoPeople = _.where(people, {state: STATE.TODO});

    // If all have done the job restart the table and start again
    if (!todoPeople || todoPeople.length === 0) {
      people = people.map(function (person) {
        person.state = STATE.TODO;
        return person;
      });
      this.setState(this.props.people);
      return;
    }

    var currentDoer = _.find(people, {state: STATE.DOING});

    if (currentDoer) {
      var doerIndex = _.findIndex(people, {name: currentDoer.name});
      people[doerIndex].state = STATE.DONE;
    }

    var randomPosition = Math.floor(Math.random() * todoPeople.length);
    var selection = todoPeople[randomPosition];
    var updateIndex = _.findIndex(people, {name: selection.name});
    people[updateIndex].state = STATE.DOING;

    this.setState(people);
  },
  render: function () {
    return (
      <div className="container">
        <div className="col-md-12">
          <PeopleTable people={this.props.people}/>
        </div>
        <div className="col-md-4 col-md-offset-4">
          <SimpleButton onClick={this.handleClick}>Randomize!</SimpleButton>
        </div>

      </div>
    );
  }
});

ReactDOM.render(
  <App people={people}/>,
  document.getElementById('root')
);

window.$.material.init();
window.$.material.ripples();
