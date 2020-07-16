import React, {Fragment, useContext} from 'react';
import Task from './Task';
import proyectContext from '../../context/proyects/proyectContext';

const ListTasks = () => {

  // Extraer proyectos del State inicial
  const proyectsContext = useContext(proyectContext);
  const { proyect } = proyectsContext;

  // Si no hay proyecto seleccionado, no se muestra nada
  if (!proyect) return <h2>Selecciona un proyecto</h2>;

  // Array destructuring para extraer el proyecto actual
  const [actualProyect] = proyect;

  const proyectTasks = [
    {name: 'Elegir Plataforma', status: true},
    {name: 'Elegir Colores', status: false},
    {name: 'Elegir Plataformas de pago', status: false},
    {name: 'Elegir Hosting', status: true}
  ];

  return (
    <Fragment>
      <h2>Proyecto: {actualProyect.name}</h2>

      <ul className="j-list-tasks">
        {proyectTasks.length === 0 ?
          (<li className="j-task"><p>No hay tareas</p></li>)
          : proyectTasks.map(task => (
            <Task
              task={task}
            />
          ))
        }
      </ul>
      <button
        type="button"
        className="j-btn j-btn-delete"
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
}
 
export default ListTasks;