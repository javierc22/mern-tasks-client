import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/authentication/authContext';

const Header = () => {

  // Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { user, authenticateUser } = authContext;

  useEffect( () => {
    authenticateUser();
  }, []);

  return (
    <header className="j-app-header">
      { user ? <p className="j-name-user">Hola <span>{user.name}</span> </p> : null }
      <nav className="j-nav-main">
        <a href="#!">Cerrar Sesión</a>
      </nav>
    </header>
  );
}
 
export default Header;