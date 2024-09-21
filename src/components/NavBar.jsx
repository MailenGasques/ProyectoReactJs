import React from 'react';
import CartWidget from './CartWidget';
import Logo from '../assets/logo.png'; 
import '../styles/navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo FiloArt" className="logo" />
      <ul className="categories">
        <li><a href="#agendas">Agendas</a></li>
        <li><a href="#cuadernos">Cuadernos</a></li>
        <li><a href="#anotadores">Anotadores</a></li>
        <li><a href="#accesorios">Accesorios</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;