import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Catálogo de Filmes | Alan Borges</p>
    </footer>
  );
};

export default Footer;
