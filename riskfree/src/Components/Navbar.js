import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">RISKFREE</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto"> 
    <Link to="/homepage">
    <ReactBootStrap.Nav.Link href="#homepage">Homepage</ReactBootStrap.Nav.Link>
    </Link>
      <ReactBootStrap.NavDropdown title="Predictor" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#maps">Maps</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#graphs">Graphs</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    <Link to="/futuredata">
    <ReactBootStrap.Nav.Link href="#futuredata">Future Data</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/aboutus">
    <ReactBootStrap.Nav.Link eventKey={2} href="#aboutus">
        About Us 
      </ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;