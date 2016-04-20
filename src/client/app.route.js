/*import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
*/
var Router = window.ReactRouter;
var Route = window.ReactRouter.Route;
var Redirect = window.ReactRouter.Redirect;
var Link = window.ReactRouter.Link;
var hashHistory = window.ReactRouter.hashHistory;
var ReactDOM = window.ReactDOM;

const App = React.createClass({
  render() {
    <h1>Home</h1>
  }
})

var List = window.AppList;
var Teams = window.AppTeams;
var Team = window.AppTeam;

const NoMatch = React.createClass({
  render() {
    return (
      <div>
        <h2>No Match</h2>
      </div>
    )
  }
})

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
ReactDOM.render(
    <Teams source="/api/teams" />
, document.getElementById('list'));