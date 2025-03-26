import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar
            expand="md"
            fixed="top"
            id="navBar"
            className={styles.NavBar}
        >
            <Container fluid>
                <NavLink to="/" className={styles.NavLink}>
                    <Navbar.Brand className='me-auto'>
                        <img
                            src={logo}
                            alt="logo"
                            height={150}
                        ></img>
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink exact to="/" className={styles.NavLink} activeClassName={styles.Active}><i className='fas fa-home'><span>Home</span></i></NavLink>
                        <NavLink to="/recipes" className={styles.NavLink} activeClassName={styles.Active}><i className='fa-solid fa-bowl-food'><span>Recipes</span></i></NavLink>
                        <NavLink to="/favourites" className={styles.NavLink} activeClassName={styles.Active}><i className="fa-solid fa-star"><span>Favourites</span></i></NavLink>
                        <NavLink to="/signin" className={styles.NavLink} activeClassName={styles.Active}><i className='fas fa-sign-in-alt'><span>Sign in</span></i></NavLink>
                        <NavLink to="/signup" className={styles.NavLink} activeClassName={styles.Active}><i className='fas fa-user-plus'><span>Sign up</span></i></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar