import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import './ItemDetail.css'; // Importa tus estilos CSS

const ItemDetail = ({ item }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  };

  return (
    <div className="item-detail-container">
      <div className="col-md-4 offset-md-4 item-info">
        <img src={item.img} className="img-fluid item-image" alt={item.title} />
        <h2 className="item-title">{item.title}</h2>
        <p className="item-description">{item.description}</p>
        <p className="item-price">$ {item.price}</p>
        <p className="item-stock">Cantidad: {item.stock}</p>
      </div>
      <div className="item-count-container">
        {goToCart ? (
          <Link to="/cart" className="link-to-cart">
            Terminar compra
          </Link>
        ) : (
          <ItemCount stock={10} initial={0} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;