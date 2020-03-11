import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './loginPage.jsx'
import Container from './container.jsx'
import AdminPage from './AdminPage.jsx'


export default function App() {
  return (
    // <Router>
    //   <div>
    //     <Login/>
    //     <hr />
    //     <Switch>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/LoggedIn">
    //         <LoggedIn />
    //       </Route>
    //       <Route path="/AdminLogIn">
    //         <AdminLogIn />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/LoggedIn">Logged In</Link>
          </li>
          <li>
            <Link to="/AdminLogIn">Admin Logged In</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
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
        <Login/>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
    </div>
  );
}

function LoggedIn() {
  return (
    <div>
      <h2>LoggedIn</h2>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <Container/>
    </div>
  );
}


function AdminLogIn() {
  return (
    <div>
      <h2>Admin Only</h2>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <h1>MAP MAP </h1>
      <AdminPage/>
    </div>
  );
}
