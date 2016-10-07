var React = require('react');

var SimpleButton = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func,
    children: React.PropTypes.string
  },
  render: function () {
    return (
      <a onClick={this.props.onClick} className="btn btn-raised withripple">
        <h2>{this.props.children}</h2>
        <div className="ripple-container"></div>
      </a>
    );
  }
});

module.exports = SimpleButton;
