//mostrador de tabla

var React = require('react');


var DisplayTable = React.createClass({
  render: function () {
    return(
      <div className="bs-component">
      <table className="table table-striped table-hover ">
        <thead>
        <tr> 
          <th>Participante</th>
          <th>Estado</th>
        </tr>
        </thead>
        <tbody>
          {
            this.props.elements.map(function(name, i){
              return(
                <tr className={this.props.colors[this.props.states[i]]} key={"name_" +i}>
                  <td>{name}</td>
                  <td>{this.props.states[i]}</td>
                </tr>
                )
              }, this) 
          }

        </tbody>
        </table>
        </div>
      )
    }
});


module.exports = DisplayTable;