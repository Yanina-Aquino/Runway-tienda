import React, { useState } from 'react';
import './ItemCount.css'; 

const ItemCount = ({ stockItems }) => {
    const [counter, setCounter] = useState(1);

    const incrementarStock = () => {
        if (counter < stockItems) {
            setCounter(counter + 1);
        }
    };

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <div className="item-count-container">
            <div className="btn-group item-count-btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary item-count-button" onClick={decrementarStock}>-</button>
                <button type="button" className="btn btn-outline-primary item-count-button">{counter}</button>
                <button type="button" className="btn btn-outline-primary item-count-button" onClick={incrementarStock}>+</button>
            </div>
            <button type="button" className="btn btn-outline-primary item-count-add-cart-button">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;




