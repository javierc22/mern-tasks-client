import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/authentication/authContext';

const Header = () => {

  // Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { user, authenticateUser, logoutUser } = authContext;

  useEffect( () => {
    authenticateUser();
  }, []);

  return (
    <header className="j-app-header">
      { user ? <p className="j-name-user">Hola <span>{user.name}</span> </p> : null }
      <nav className="j-nav-main">
        <button
          className="j-btn j-btn-blank j-sign-out"
          onClick={ () => logoutUser() }
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
}
 
export default Header;