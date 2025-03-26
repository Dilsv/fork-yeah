import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import { removeTokenTimestamp } from "../utils/utils";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  const loggedInIcons = (
    <>
      <NavLink
        to="/favourites"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fa-solid fa-star">
          <span>Favourites</span>
        </i>
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt">
          <span>Sign out</span>
        </i>
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar
          src={currentUser?.profile_image}
          text={currentUser?.username}
          height={50}
        />
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        to="/signin"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-sign-in-alt">
          <span>Sign in</span>
        </i>
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus">
          <span>Sign up</span>
        </i>
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      expand="md"
      fixed="top"
      id="navBar"
      className={styles.NavBar}
    >
      <Container fluid>
        <NavLink to="/" className={styles.NavLink}>
          <Navbar.Brand className="me-auto">
            <img src={logo} alt="logo" height={150}></img>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          ref={ref}
          onClick={() => {
            setExpanded(!expanded);
            document
              .getElementById("navBar")
              .classList.add(`${styles.NavBarMobile}`);
          }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink
              exact
              to="/"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fas fa-home">
                <span>Home</span>
              </i>
            </NavLink>
            <NavLink
              to="/recipes"
              className={styles.NavLink}
              activeClassName={styles.Active}
            >
              <i className="fa-solid fa-bowl-food">
                <span>Recipes</span>
              </i>
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
