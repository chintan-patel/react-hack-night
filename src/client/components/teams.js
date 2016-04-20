class List extends React.Component {
  render() {
    return( <div>Votes</div> );
  }
}
var Link = window.ReactRouter.Link;
var Teams = React.createClass({
  getInitialState: function() {
    return {teams: []};
  },
   componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {

      this.setState({
        teams: result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        <h1>Teams</h1>
        <div className="master">
          <ul>
            {this.state.teams.map(team => (
              <li key={team.id}><Link to={`/team/${team.id}`}>{team.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
});

ReactDOM.render(

  <Teams source="/api/teams" />,
  document.getElementById('list')
);