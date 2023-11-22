import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useCartContext } from '../Context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
    const { totalProducts, cart } = useCartContext();
    return (
        <div>
            <button type="button" className="cart-button">
                <BsFillCartPlusFill className="cart-icon" />
                <span className="badge">{totalProducts() || cart}</span>
            </button>
        </div>
    );
}

export default CartWidget;