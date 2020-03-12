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
import PieChartContainer from './PieChartContainer.jsx';



export default function App() {

  // const loggedState = useSelector(state => state.isLoggedIn)
  
  const loggedState = "user";

  return (
    <Router>
        <Route exact path="/" component={()=>{
          if (loggedState === "Admin") {return <AdminLogIn/>}
          else if (loggedState === 'user') { return <LoggedIn/>}
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
         {/* <Map/> */}
         <PieChartContainer/>
    </div>
  );
}

function LoggedIn() {
  return (
    <div>
      <Map/>
      <Container/>
    </div>
  );
}


function AdminLogIn() {
  return (
    <div>
      <Map/>
      <AdminPage/>
    </div>
  );
}
