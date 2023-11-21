import React from 'react';
//boostrap para react
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//CSS
import './NavBar.css';
//importar logo
import logo from '../../img/Logo/1.png'; 
//Carrito de compras
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg"  bg="light" data-bs-theme="light">
                <Container className="navbar-container">

                    {/* Logo img */}
                    <Navbar.Brand href="#home" className="navbar-brand">
                        <NavLink><img src={logo} alt="Logo de Runway" className="logo-img"/></NavLink>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* Links navBar */}
                        <Nav className="me-auto mx-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/category/pantalones" className="nav-link">Pantalones</NavLink>
                            <NavLink to="/category/remeras" className="nav-link">Remeras</NavLink>
                            <NavLink to="/category/vestidos" className="nav-link">Vestidos</NavLink>
                        </Nav>

                        {/* Icono carrito de compras */}
                        <NavLink className="ml-auto" to="/cart">
                            {/* Carrito de compras */}
                            <CartWidget/>
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;