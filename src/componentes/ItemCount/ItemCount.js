import React, { useEffect, useState } from "react";
import './ItemCount.css'; 

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial) || 1); 

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial) || 1); 
  }, [initial]);

  return (
    <div className="counter">
      <div className="buttons">
        <button disabled={count <= 1} onClick={decrease} className="operacion">
          -
        </button>
        <span>{count}</span>
        <button
          disabled={count >= stock}
          onClick={increase}
          className="operacion"
        >
          +
        </button>
      </div>

      <div>
        <button
          disabled={stock <= 0}
          onClick={() => onAdd(count)}
          className="operacion-agregar"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;