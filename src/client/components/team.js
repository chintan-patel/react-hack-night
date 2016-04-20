window.AppTeam = React.createClass({
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      team: findTeamById(this.props.params.teamId)
    })
  },

  render() {
    return (
      <div>
        <h2>{this.state.team.name}</h2>
        {/* etc. */}
      </div>
    )
  }
})