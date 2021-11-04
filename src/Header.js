import React from "react";

const Header = () => {
  return (
    <nav>
    <div className="nav-wrapper purple accent-3">
      <a href="/" className="brand-logo">Livraria codificada</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/autores">Autores</a></li>
        <li><a href="/livros">Livros</a></li>
        <li><a href="/precos">Preços</a></li>
      </ul>
    </div>
  </nav>
  );
};

export default Header;
