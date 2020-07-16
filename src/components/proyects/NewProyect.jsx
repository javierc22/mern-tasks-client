import React, {Fragment, useState, useContext} from 'react';
import proyectContext from '../../context/proyects/proyectContext';

const NewProyect = () => {

  // Obtener el State del Formulario
  const proyectsContext = useContext(proyectContext);
  const { form, errorForm, showForm, addProyect, showError } = proyectsContext;

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

    // Validar que nombre del proyecto esté presente
    if(name === '') {
      showError();
      return;
    }

    // Agregar al State
    addProyect(proyect);

    // Reiniciar el formulario
    setProyect({
      name: ''
    });

  }

  // Mostrar el formulario
  const onClickForm = () => {
    showForm();
  }

  return (
    <Fragment>
      <button 
        type="button" 
        className="j-btn j-btn-block j-btn-primary"
        onClick={onClickForm}
      >
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

      { errorForm ? <p className="j-message j-error">El nombre del proyecto es obligatorio</p> : null }
    </Fragment>
  );
}
 
export default NewProyect;