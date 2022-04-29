import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className=" sticky-top navbar-container">
      <Navbar collapseOnSelect className="py-1" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Phonesy Warehouse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavLink to="/" className="navigation-link">
                Home
              </NavLink>
              <NavLink to="/about" className="navigation-link">
                About
              </NavLink>
              <NavLink to="/blogs" className="navigation-link">
                Blog
              </NavLink>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">
                <button className="login-btn">
                  Login <FontAwesomeIcon className="ps-2" icon={faSignIn} />
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
