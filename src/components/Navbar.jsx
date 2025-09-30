import React from 'react';
import './components.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-marca">
          <h1>INFOMAGIC</h1>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">Sobre Nosotros</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">Servicios</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;