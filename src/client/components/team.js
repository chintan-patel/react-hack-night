 window.AppTeam = React.createClass({
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      team: this.props.params
    })
  },

  render() {
    return (
      <div>
        <h2>This{this.props.params}</h2>
        {/* etc. */}
      </div>
    )
  }
})