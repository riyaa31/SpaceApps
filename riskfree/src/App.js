
import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Aboutus from "./Components/Aboutus";
import FutureData from "./Components/FutureData";
import Homepage from "./Components/Homepage";
import NavBar from "./Components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/aboutus" component={Aboutus}>
              <Aboutus />
          </Route>
          <Route path="/futuredata" component={FutureData}>
            <FutureData />
          </Route>
          <Route path="/homepage" component={Homepage}>
            <Homepage />
          </Route>
          
        </Switch>
    </Router>
    </div>
  );
}

export default App;