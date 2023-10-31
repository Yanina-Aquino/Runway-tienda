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
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg"  bg="light" data-bs-theme="light">
                <Container className="navbar-container">

                    {/* Logo img */}
                    <Navbar.Brand href="#home" className="navbar-brand">
                        <Link><img src={logo} alt="Logo de Runway" className="logo-img"/></Link>
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* Links navBar */}
                        <Nav className="me-auto mx-auto">
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/category/pantalones" className="nav-link">Pantalones</Link>
                            <Link to="/category/remeras" className="nav-link">Remeras</Link>
                            <Link to="/category/vestidos" className="nav-link">Vestidos</Link>
                        </Nav>

                        {/* Icono carrito de compras */}
                        <Link className="ml-auto">
                            {/* Carrito de compras */}
                            <CartWidget/>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;