import React from 'react'
// imagem principal
import principal from '../img/principal.jpg'
// Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
//CSS
import '../componentes/ItemListContainer.css';

<ItemListContainer greeting="¡Bienvenidos a Runway, donde la moda y el estilo se encuentran en cada paso que das!" />

function ItemListContainer(props) {
    
    return (
        <div className="imagen-container">
            <Image src={principal} fluid className="imagen" alt="Imagen principal" />
            <div className="texto-superpuesto">
                <h1>{props.greeting}</h1>
            </div>
        </div> 
    );
}
export default ItemListContainer