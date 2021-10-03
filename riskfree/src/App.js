import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";


function Homepage() {
  return(
      <div className="App">
         
          <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">RISKFREE</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="#homepage">Homepage</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Predictor" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#predictor/maps">Maps</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#predictor/graphs">Graphs</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#predictor/links">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#future-data">Future Data</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="#about-us">
        About Us
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  
</ReactBootStrap.Navbar>
         </div> 
  )
  }
export default Homepage;
