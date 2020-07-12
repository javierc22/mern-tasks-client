import React, {Fragment} from 'react';
import Task from './Task';

const ListTasks = () => {

  const proyectTasks = [
    {name: 'Elegir Plataforma', status: true},
    {name: 'Elegir Colores', status: false},
    {name: 'Elegir Plataformas de pago', status: false},
    {name: 'Elegir Hosting', status: true}
  ];

  return (
    <Fragment>
      <h2>Proyecto: Tienda Virtual</h2>

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