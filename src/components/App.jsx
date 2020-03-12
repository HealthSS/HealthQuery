import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './loginPage.jsx'
import AdminPage from './AdminPage.jsx'
import Map from './Map.jsx'
import Container from './container.jsx'



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
    <div id="login">
      <div id='loginSection'>
        <Login/>
      </div>
         <Map/>
    </div>
  );
}

function LoggedIn() {
  return (
    <div>
      <h2>LoggedIn</h2>
      <Map/>
      <Container/>
    </div>
  );
}


function AdminLogIn() {
  return (
    <div>
      <h2>Admin Only</h2>
      <Map/>
      <AdminPage/>
    </div>
  );
}
