import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
  PROYECT_TASKS
} from '../../types';

const TaskState = props => {
  const initialState = {
    tasks: [
      { name: 'Elegir Plataforma', status: true, proyectId: 1},
      { name: 'Elegir Colores', status: false, proyectId: 2},
      { name: 'Elegir Plataformas de pago', status: false, proyectId: 3},
      { name: 'Elegir Hosting', status: true, proyectId: 4},
      { name: 'Elegir Plataforma', status: true, proyectId: 1},
      { name: 'Elegir Colores', status: false, proyectId: 2},
      { name: 'Elegir Plataformas de pago', status: false, proyectId: 3},
      { name: 'Elegir Plataforma', status: true, proyectId: 4},
      { name: 'Elegir Colores', status: false, proyectId: 1},
      { name: 'Elegir Plataformas de pago', status: false, proyectId: 2},
      { name: 'Elegir Plataforma', status: true, proyectId: 3},
      { name: 'Elegir Colores', status: false, proyectId: 4},
      { name: 'Elegir Plataformas de pago', status: false, proyectId: 3}
    ],
    proyectTasks: null
  }

  // Crear State y Dispatch
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Obtener las tareas de un proyecto
  const getTasks = proyectId => {
    dispatch({
      type: PROYECT_TASKS,
      payload: proyectId
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        proyectTasks: state.proyectTasks,
        getTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;