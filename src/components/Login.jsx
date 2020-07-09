import React, {useState} from 'react';
import { Link } from "react-router-dom";

const Login = () => {

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

  }

  return (
    <div className="j-form-user">
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