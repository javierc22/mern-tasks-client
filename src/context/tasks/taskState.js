import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';

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
  }

  // Crear State y Dispatch
  const [state, dispatch] = useReducer(TaskReducer, initialState)

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;