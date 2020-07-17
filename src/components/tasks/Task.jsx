import React, {useContext} from 'react';
import proyectContext from '../../context/proyects/proyectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({task}) => {

  // Extraer si un proyecto está seleccionado
  const proyectsContext = useContext(proyectContext);
  const { proyect } = proyectsContext;

  // Obtener función context Tarea
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks } = tasksContext;

  // Extraer el proyecto
  const [actualProyect] = proyect;

  // Función para eliminar una tarea
  const onClickDeleteTask = id => {
    deleteTask(id);
    getTasks(actualProyect.id);
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
            >Completo</button>
          )
        :
          (
            <button
              type="button"
              className="j-incomplete"
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