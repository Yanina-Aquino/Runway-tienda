import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from '../src/componentes/NavBar/NavBar';
import Error from '../src/componentes/Error';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from '../src/componentes/Cart/Cart';
import CartProvider from '../src/componentes/Context/CartContext';
import { Checkout } from './componentes/CheckOut/CheckOut';


function App() {
  return (
    <div className="body-wrapper">
    <div className="App">
      <BrowserRouter>
        <CartProvider>
        <NavBar/>
        
            <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:id' element={<ItemListContainer/>} />
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
            <Route path={"/cart"} element={<Cart/>} />
            <Route path={"/checkout"} element={<Checkout/>} />
            <Route path='*' element={<Error/>} />
            </Routes>

          </CartProvider>
      </BrowserRouter>
      </div>
    </div>
    
  );
}

export default App;