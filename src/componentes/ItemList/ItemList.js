import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ item }) => {
  return (
    <div className='row justify-content-center' id='itemlist'>
      {item.map((product) => (
        <div className='col-md-3' key={product.id}>
          <Item item={product} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;