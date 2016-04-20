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
        <h1>Rate my Hack</h1>
        <div className="master">
          <table className="table striped">
           <tbody>
            {this.state.teams.map(team => (
                <tr key={team.id}>
                  <td><a href={`/team/${team.id}`}>{team.name}</a></td>
                  <td>{team.rating}</td>
                </tr>
            ))}
             </tbody>
          </table>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
});
window.AppTeams = Teams;

/*
ReactDOM.render(
  <Teams source="/api/teams" />,
  document.getElementById('list')
);
*/