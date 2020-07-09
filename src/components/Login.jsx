import React from 'react';

const Login = () => {

  const onChange = () => {

  }

  return (
    <div className="j-form-user">
      <div className="j-container-form j-shadow-dark">
        <h1>Iniciar Sesión</h1>

        <form>
          <div className="j-field-form">
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id="email"
              name="email" 
              placeholder="Tu Email" 
              onChange={onChange} 
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
      </div>
    </div>
  );
}

export default Login;