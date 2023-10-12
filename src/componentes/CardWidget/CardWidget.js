import React from 'react'
//boostrap para react
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
//CSS
import '../CardWidget/CardWidget.css';
//Icono carrito de compras
import { BsFillCartFill } from "react-icons/bs";




const CardWidget = () => {
    return (
        <div>
            <Nav.Link href="#carrito" className="carrito-style">
                <BsFillCartFill className="react-icons"/>
                <p>0</p>
            </Nav.Link>
        </div>
    )
}

export default CardWidget