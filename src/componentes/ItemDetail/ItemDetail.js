import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    return (
        <div className='row'>
        <div className='col-md-4 offset-md-4'>
            <img src={item.imagen} className='img-fluid' alt={item.nombre} />
            <h2 className='custom-h2'>{item.nombre}</h2>
            <p className='custom-p'>{item.descripcion}</p>
            <p className='price'>{`$ ${item.precio}`}</p>
            <p className='stock'>{`Stock: ${item.stock}`}</p>
        </div>
        <div>
            <ItemCount stockItems={10} />
        </div>
        </div>
    );
}

export default ItemDetail;