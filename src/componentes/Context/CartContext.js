import React, { useState, useContext } from 'react';

const CartContext = React.createContext('');

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const totalPrice = () =>
    cart.reduce((total, product) => total + product.quantity * product.price, 0);

  const totalProducts = () =>
    cart.reduce((accumulator, currentProduct) => accumulator + currentProduct.quantity, 0);

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.some((product) => product.id === id);

  const removeProduct = (id) => setCart(cart.filter((product) => product.id !== id));

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;