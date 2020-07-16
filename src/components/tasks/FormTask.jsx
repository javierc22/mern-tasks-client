import React, {useContext} from 'react';
import proyectContext from '../../context/proyects/proyectContext';

const FormTask = () => {

  // Extraer si un proyecto está seleccionado
  const proyectsContext = useContext(proyectContext);
  const { proyect } = proyectsContext;

  // Si no hay proyecto seleccionado, no se muestra nada
  if (!proyect) return null;

  // Array destructuring para extraer el proyecto actual
  const [actualProyect] = proyect;

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