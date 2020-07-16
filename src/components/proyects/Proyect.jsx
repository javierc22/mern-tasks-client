import React, {useContext} from 'react';
import proyectContext from '../../context/proyects/proyectContext';
import taskContext from '../../context/tasks/taskContext';

const Proyect = ({proyect}) => {

  // Obtener el State de "proyectos"
  const proyectsContext = useContext(proyectContext);
  const { actualProyect } = proyectsContext;

  // Obtener la función "getTasks()"
  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;

  // Función para seleccionar el proyecto actual y obtener sus tareas
  const selectProyect = id => {
    // Selecciona un proyecto
    actualProyect(id);
    // Obtiene las tareas del proyecto seleccionado
    getTasks(id);
  }

  return (
    <li>
      <button
        type="button"
        className="j-btn j-btn-blank"
        onClick={ () => selectProyect(proyect.id) }
      >
        {proyect.name}
      </button>
    </li>
  );
}
 
export default Proyect;