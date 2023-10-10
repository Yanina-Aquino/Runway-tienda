import React from 'react';
//boostrap para react
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//CSS
import '../componentes/NavBar.css';
//importar logo
import logo from '../img/Logo/1.png';
//iconos boostrap
import { BsFillCartFill } from "react-icons/bs";


const NavBar = () => {
    return (
        <div>
        <Navbar expand="lg"  bg="light" data-bs-theme="light">
            <Container className="navbar-container">

                {/* Logo img */}
                <Navbar.Brand href="#home" className="navbar-brand">
                    <img src={logo} alt="Logo de Runway" className="logo-img"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                {/* Links navBar */}
                <Nav className="me-auto mx-auto">
                    <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                    <Nav.Link href="#productos" className="nav-link">Productos</Nav.Link>
                    <Nav.Link href="#contacto" className="nav-link">Contacto</Nav.Link>
                    <Nav.Link href="#politica-cambios" className="nav-link">Politica de cambios</Nav.Link>
                </Nav>

                {/* Icono carrito de compras */}
                <Nav className="ml-auto">
                    <Nav.Link href="#carrito" className="carrito-style">
                        <BsFillCartFill className="react-icons"/>
                        <p>0</p>
                    </Nav.Link>
                </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default NavBar;