

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './loginPage.jsx'
import Container from './container.jsx'


export default function App() {
  return (
    <Router>
      <div>
        <Login/>
        <hr />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/LoggedIn">
            <LoggedIn />
          </Route>
          <Route path="/AdminLogIn">
            <AdminLogIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <Container/>
    </div>
  );
}

function LoggedIn() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}


function AdminLogIn() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
