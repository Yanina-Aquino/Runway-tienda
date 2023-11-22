import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'; 

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <p className="cart-message">El carrito esta vacio</p>
        <Link to="/" className="cart-link">Home</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p className="cart-total">Total: $ {totalPrice()}</p>

      <Link to="/checkout">
        <button className="btn-total">Finalizar Compra</button>
      </Link>
    </div>
  );
};

export default Cart;