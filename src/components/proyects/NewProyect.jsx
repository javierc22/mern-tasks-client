import React, {Fragment, useState} from 'react';

const NewProyect = () => {

  // State para nuevo proyecto
  const [proyect, setProyect] = useState({
    name: ''
  });

  // Extraer nombre de proyecto
  const { name } = proyect;

  // Lee contenido del input
  const onChangeProyect = e => {
    setProyect({
      ...proyect,
      [e.target.name] : e.target.value
    })
  }

  // Submit del Formulario
  const onSubmitProyect = e => {
    e.preventDefault()
  }

  return (
    <Fragment>
      <button type="button" className="j-btn j-btn-block j-btn-primary">
        Nuevo Proyecto
      </button>

      <form 
        className="j-form-new-proyect"
        onSubmit={onSubmitProyect}
      >
        <input
          type="text" 
          className="j-input-text"
          placeholder="Nombre Proyecto"
          name="name"
          value={name}
          onChange={onChangeProyect}
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