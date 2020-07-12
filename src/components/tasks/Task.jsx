import React from 'react';

const Task = ({task}) => {
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
        >Eliminar</button>
      </div>
    </li>
  );
}
 
export default Task;