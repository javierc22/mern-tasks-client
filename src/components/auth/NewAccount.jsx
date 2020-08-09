import React, {useState, useContext} from 'react';
import { Link } from "react-router-dom";
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const NewAccount = () => {
  // Extraer los valores del Context
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { registerUser } = authContext;

  // State para iniciar sesión
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  // Extraer de State "user"
  const { name, email, password, password_confirmation } = user;

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

    // Validar que no existan campos vacíos
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || password_confirmation.trim() === '') {
      showAlert('Todos los campos son obligatorios', 'j-alert-error');
      return;
    }

    // Password mínimo de 6 caracteres
    if (password.length < 6) {
      showAlert('El password debe ser de al menos 6 caracteres', 'j-alert-error');
      return;
    }

    // Revisar que password y password_confirmation sean iguales
    if (password !== password_confirmation) {
      showAlert('Los passwords no son iguales', 'j-alert-error');
      return;
    }

    // Registrar usuario
    registerUser({
      name, email, password
    });
  }

  return (
    <div className="j-form-user">
      { alert ? (<div className={`j-alert ${alert.category}`}>{alert.message}</div>) : null }
      <div className="j-container-form j-shadow-dark">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={onSubmit}>
          <div className="j-field-form">
            <label htmlFor="name">Nombre</label>
            <input 
              type="text"
              id="name"
              name="name" 
              placeholder="Tu Nombre" 
              onChange={onChange}
              value={name}
            />
          </div>
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
            <label htmlFor="password_confirmation">Confirmar Contraseña</label>
            <input 
              type="password"
              id="password_confirmation"
              name="password_confirmation" 
              placeholder="Repite tu Contraseña" 
              onChange={onChange} 
              value={password_confirmation}
            />
          </div>

          <div className="j-field-form">
            <input 
              type="submit"
              className="j-btn j-btn-primary j-btn-block"
              value="Registrarme"
            />
          </div>
        </form>

        <Link to={'/'} className="j-link-account">
          Volver a Iniciar Sesión
        </Link>
      </div>
    </div>
  );
}

export default NewAccount;