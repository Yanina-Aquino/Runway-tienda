import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from "../src/componentes/ItemListCointainer/ItemListContainer";
import ItemDetailContainer from "../src/componentes/ItemDetailContainer/ItemDetailContainer";
import Error from "../src/componentes/Error";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

      {/* //NavBar */}
      <NavBar />

      {/* ItemListContainer - Presentación */}
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
        
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
