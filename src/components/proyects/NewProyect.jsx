import React, {Fragment, useState, useContext} from 'react';
import proyectContext from '../../context/proyects/proyectContext';

const NewProyect = () => {

  // Obtener el State del Formulario
  const proyectsContext = useContext(proyectContext);
  const { form } = proyectsContext;

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

      { form ?
        (
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
        ) : null
      }
    </Fragment>
  );
}
 
export default NewProyect;