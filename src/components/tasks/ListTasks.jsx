import React, {Fragment, useContext} from 'react';
import Task from './Task';
import proyectContext from '../../context/proyects/proyectContext';
import taskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListTasks = () => {

  // Extraer proyectos del State inicial
  const proyectsContext = useContext(proyectContext);
  const { proyect, deleteProyect } = proyectsContext;

  // Obtener las tareas del proyecto
  const tasksContext = useContext(taskContext);
  const { proyectTasks } = tasksContext;

  // Si no hay proyecto seleccionado, no se muestra nada
  if (!proyect) return <h2>Selecciona un proyecto</h2>;

  // Array destructuring para extraer el proyecto actual
  const [actualProyect] = proyect;

  // Elimina un proyecto
  const onClickDelete = () => {
    deleteProyect(actualProyect._id);
  }

  return (
    <Fragment>
      <h2>Proyecto: {actualProyect.name}</h2>

      <ul className="j-list-tasks">
        {proyectTasks.length === 0 ?
          (<li className="j-task"><p>No hay tareas</p></li>)
          :
          <TransitionGroup>
            {proyectTasks.map(task => (
              <CSSTransition
                key={task.id}
                timeout={200}
                classNames="j-task"
              >
                <Task
                  task={task}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        }
      </ul>
      <button
        type="button"
        className="j-btn j-btn-delete"
        onClick={onClickDelete}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
}
 
export default ListTasks;