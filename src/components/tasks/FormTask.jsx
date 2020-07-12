import React from 'react';

const FormTask = () => {
  return (
    <div className="j-form">
      <form>
        <div className="j-container-input">
          <input 
            type="text"
            className="j-input-text"
            placeholder="Nombre Tarea..."
            name="name"
          />
        </div>

        <div className="j-container-input">
          <input 
            type="submit"
            className="j-btn j-btn-primary j-btn-submit j-btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
}
 
export default FormTask;