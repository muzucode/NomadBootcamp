import React from "react";
import { Navbar } from "react-bootstrap";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import './styles/styles.css'

export function TopNavBar() {
  return (
    <Navbar  className="topnav px-5 m-0">
      <Container className="p-0 m-0">
        <Navbar.Brand className="navTitle" href="/">Nomad Bootcamp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navLink" href="/apply">Apply</Nav.Link>
            <Nav.Link className="navLink" href="/pricing">Pricing</Nav.Link>
            <Nav.Link className="navLink" href="/sponsors">Prerequisites</Nav.Link>
            <Nav.Link className="navLink" href="/free-demo">Free Demo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}