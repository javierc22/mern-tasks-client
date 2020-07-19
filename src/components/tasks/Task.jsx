import React, {useContext} from 'react';
import proyectContext from '../../context/proyects/proyectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({task}) => {

  // Extraer si un proyecto está seleccionado
  const proyectsContext = useContext(proyectContext);
  const { proyect } = proyectsContext;

  // Obtener función context Tarea
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks, changeStatusTask } = tasksContext;

  // Extraer el proyecto
  const [actualProyect] = proyect;

  // Función para eliminar una tarea
  const onClickDeleteTask = id => {
    deleteTask(id);
    getTasks(actualProyect.id);
  }

  // Función que modifica el estado de las tareas
  const changeStatus = task => {
    if (task.status) {
      task.status = false;
    } else {
      task.status = true;
    }

    changeStatusTask(task);
  }

  return (
    <li className="j-task j-shadow">
      <p>{task.name}</p>

      <div className="j-status">
        {task.status ?
          (
            <button
              type="button"
              className="j-complete"
              onClick={() => changeStatus(task)}
            >Completo</button>
          )
        :
          (
            <button
              type="button"
              className="j-incomplete"
              onClick={() => changeStatus(task)}
            >Incompleto</button>
          )
        }
      </div>

      <div className="j-actions">
        <button
          type="button"
          className="j-btn j-btn-primary"
        >Editar</button>

        <button
          type="button"
          className="j-btn j-btn-secondary"
          onClick={ () => onClickDeleteTask(task.id) }
        >Eliminar</button>
      </div>
    </li>
  );
}
 
export default Task;