import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import logo from '../../img/Logo/1.png'; 
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg"  bg="light" data-bs-theme="light">
                <Container className="navbar-container">

                    <Navbar.Brand href="#home" className="navbar-brand">
                        <NavLink><img src={logo} alt="Logo de Runway" className="logo-img"/></NavLink>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto mx-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/category/pantalones" className="nav-link">Pantalones</NavLink>
                            <NavLink to="/category/remeras" className="nav-link">Remeras</NavLink>
                            <NavLink to="/category/vestidos" className="nav-link">Vestidos</NavLink>
                        </Nav>

                        <NavLink className="ml-auto" to="/cart">
                            <CartWidget/>
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;