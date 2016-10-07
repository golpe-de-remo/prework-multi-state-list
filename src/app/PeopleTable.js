var React = require('react');
var classesFrom = require('./TaskState').classesFromState;

var PeopleTable = React.createClass({
  propTypes: {
    people: React.PropTypes.array
  },
  getColor: function (state) {
    return classesFrom[state];
  },
  render: function () {
    return (
      <table className="table table-hover">
        <tbody>
          {
            this.props.people.map(function (person, position) {
              return (
                <tr key={position} className={this.getColor(person.state)}>
                  <td><h1>{person.name}</h1></td>
                </tr>
              );
            }, this)
          }
        </tbody>
      </table>
    );
  }
});

module.exports = PeopleTable;
