import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";

import "./Header.css";
import auth from "../../../FirebaseInit/FirebaseInit";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinners from "../Spinners/Spinners";

const Header = () => {
  let [user, loading] = useAuthState(auth);
  if (loading) {
    return <Spinners />;
  }
  return (
    <div className=" sticky-top navbar-container p-2">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Apple Stock
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <NavLink to="/" className="navigation-link">
                Home
              </NavLink>

              {user ? (
                <NavLink to="/manage-inventories" className="navigation-link">
                  Manage Items
                </NavLink>
              ) : (
                ""
              )}
              {user ? (
                <NavLink to="/add-new-item" className="navigation-link">
                  Add Item
                </NavLink>
              ) : (
                ""
              )}
              {user ? (
                <NavLink to="/my-items" className="navigation-link">
                  My items
                </NavLink>
              ) : (
                ""
              )}

              <NavLink to="/our-team" className="navigation-link">
                Our Team
              </NavLink>
              <NavLink to="/about" className="navigation-link">
                About
              </NavLink>
              <NavLink to="/blogs" className="navigation-link">
                Blog
              </NavLink>
            </Nav>
            <Nav>
              {user ? (
                <button onClick={() => signOut(auth)} className="login-btn">
                  Sign Out <FontAwesomeIcon className="ps-2" icon={faSignIn} />
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <button className="login-btn">
                    Login <FontAwesomeIcon className="ps-2" icon={faSignIn} />
                  </button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
