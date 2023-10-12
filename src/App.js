import './App.css';

import ItemListContainer from './componentes/ItemListCointainer/ItemListContainer';
import  NavBar from './componentes/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      
      {/* //NavBar */}
      <NavBar />

      {/* ItemListContainer - Presentación */}
      <ItemListContainer 
      greeting="¡Bienvenidos a Runway!"/>

    </div>
  );
}

export default App;
