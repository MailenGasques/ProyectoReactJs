import React from 'react';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './styles/navbar.css';
import './styles/general.css';
import './styles/cartwidget.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a FiloArt" />
    </div>
  );
};

export default App;