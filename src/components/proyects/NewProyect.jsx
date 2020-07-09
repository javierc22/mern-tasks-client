import React, {Fragment} from 'react';

const NewProyect = () => {
  return (
    <Fragment>
      <button type="button" className="j-btn j-btn-block j-btn-primary">
        Nuevo Proyecto
      </button>

      <form className="j-form-new-proyect">
        <input
          type="text" 
          className="j-input-text"
          placeholder="Nombre Proyecto"
          name="name"
        />

        <input 
          type="submit"
          className="j-btn j-btn-primary j-btn-block"
          value="Agregar Proyecto"
        />
      </form>
    </Fragment>
  );
}
 
export default NewProyect;