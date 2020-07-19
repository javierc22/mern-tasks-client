import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
  PROYECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATUS_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAR_TASK
} from '../../types';

const TaskState = props => {
  const initialState = {
    tasks: [
      { id: 1, name: 'Elegir Plataforma', status: true, proyectId: 1},
      { id: 2, name: 'Elegir Colores', status: false, proyectId: 2},
      { id: 3, name: 'Elegir Plataformas de pago', status: false, proyectId: 3},
      { id: 4, name: 'Elegir Hosting', status: true, proyectId: 4},
      { id: 5, name: 'Elegir Plataforma', status: true, proyectId: 1},
      { id: 6, name: 'Elegir Colores', status: false, proyectId: 2},
      { id: 7, name: 'Elegir Plataformas de pago', status: false, proyectId: 3},
      { id: 8, name: 'Elegir Plataforma', status: true, proyectId: 4},
      { id: 9, name: 'Elegir Colores', status: false, proyectId: 1},
      { id: 10, name: 'Elegir Plataformas de pago', status: false, proyectId: 2},
      { id: 11, name: 'Elegir Plataforma', status: true, proyectId: 3},
      { id: 12, name: 'Elegir Colores', status: false, proyectId: 4},
      { id: 13, name: 'Elegir Plataformas de pago', status: false, proyectId: 3}
    ],
    proyectTasks: null,
    errorTask: false,
    selectedTask: null,
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

  // Agregar una tarea al proyecto seleccionado
  const addTask = task => {
    task.id = uuidv4();
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }

  // Valida y muestra un error en caso de que sea necesario
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    })
  }

  // Eliminar tarea
  const deleteTask = id => {
    dispatch({
      type: DELETE_TASK,
      payload: id
    })
  }

  // Cambiar estado de tarea
  const changeStatusTask = task => {
    dispatch({
      type: STATUS_TASK,
      payload: task
    })
  }

  // Extraer una tarea para edición
  const saveCurrentTask = task => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    })
  }

  // Edita o modifica una tarea seleccionada
  const updateTask = task => {
    dispatch({
      type: UPDATE_TASK,
      payload: task
    })
  }

  // Reestablece a "Null" la tarea seleccionada
  const clearTask = () => {
    dispatch({
      type: CLEAR_TASK
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        proyectTasks: state.proyectTasks,
        errorTask: state.errorTask,
        selectedTask: state.selectedTask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeStatusTask,
        saveCurrentTask,
        updateTask,
        clearTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;