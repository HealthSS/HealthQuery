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
import { useDispatch, useSelector } from "react-redux";


export default function App() {

  const loggedState = useSelector(state => state.text.isLoggedIn);
  
  // const loggedState = null;

  return (
    <Router>
        <Route exact path="/" component={()=>{
          if (loggedState === "Admin") {return <AdminLogIn/>}
          else if (loggedState === 'User') { return <LoggedIn/>}
          else {return <Home/>}
          }} />
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
