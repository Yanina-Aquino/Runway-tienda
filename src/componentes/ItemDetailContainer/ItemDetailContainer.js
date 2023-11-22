import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'; // Importa tus estilos CSS

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, 'products', id);
        const res = await getDoc(queryDoc);

        if (res.exists()) {
          setItem({ id: res.id, ...res.data() });
        } else {
          console.log('Producto no encontrado');
        }
      } catch (error) {
        console.error('Error al obtener el producto', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="item-detail-container">
      {item && <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;