import React, {useState, useContext} from 'react';
import { Link } from "react-router-dom";
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const Login = () => {
  // extraer los valores del context
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { message, authenticated, loginUser } = authContext;

  // State para iniciar sesión
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  // Extraer de State "user"
  const { email, password } = user;

  // Funcion para actualizar State "user"
  const onChange = e => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  // Cuando se envía el formulario
  const onSubmit = e => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      showAlert('Todos los campos son obligatorios', 'j-alert-error');
      return;
    }

    // Action iniciar sesión
    loginUser({ email, password });
  }

  return (
    <div className="j-form-user">
      { alert ? (<div className={`j-alert ${alert.category}`}>{alert.message}</div>) : null }
      <div className="j-container-form j-shadow-dark">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={onSubmit}>
          <div className="j-field-form">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id="email"
              name="email" 
              placeholder="Tu Email" 
              onChange={onChange}
              value={email}
            />
          </div>
          <div className="j-field-form">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password"
              id="password"
              name="password" 
              placeholder="Tu Contraseña" 
              onChange={onChange} 
              value={password}
            />
          </div>

          <div className="j-field-form">
            <input 
              type="submit"
              className="j-btn j-btn-primary j-btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>

        <Link to={'/nueva-cuenta'} className="j-link-account">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
}

export default Login;