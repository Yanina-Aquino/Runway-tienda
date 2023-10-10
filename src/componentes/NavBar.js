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
        <Navbar bg="light" data-bs-theme="light">
            <Container className="navbar-container">
                <div>
                {/* Logo img */}
                <Navbar.Brand href="#home" className="navbar-brand">
                    <img src={logo} alt="Logo de Runway" className="logo-img"/>
                </Navbar.Brand>
                </div>
                <div>
                {/* Links navBar */}
                <Nav className="me-auto mx-auto">
                    <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                    <Nav.Link href="#productos" className="nav-link">Productos</Nav.Link>
                    <Nav.Link href="#contacto" className="nav-link">Contacto</Nav.Link>
                    <Nav.Link href="#politica-cambios" className="nav-link">Politica de cambios</Nav.Link>
                </Nav>
                </div>

                <div>
                {/* Icono carrito de compras */}
                <Nav className="ml-auto">
                    <Nav.Link href="#carrito" className="carrito-style">
                        <BsFillCartFill className="react-icons"/>
                        <p>0</p>
                    </Nav.Link>
                </Nav>
                </div>
            
            </Container>
        </Navbar>
        </div>
    );
}

export default NavBar;