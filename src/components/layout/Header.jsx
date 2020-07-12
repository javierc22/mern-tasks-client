import React from 'react';

const Header = () => {
  return (
    <header className="j-app-header">
      <p className="j-name-user">Hola <span>Juan Pablo</span> </p>

      <nav className="j-nav-main">
        <a href="#!">Cerrar Sesión</a>
      </nav>
    </header>
  );
}
 
export default Header;