import React, { useReducer } from 'react';
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

import axiosClient from '../../config/axios';

const TaskState = props => {
  const initialState = {
    proyectTasks: [],
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
  const addTask = async task => {
    try {
      const response = await axiosClient.post('/api/tasks', task);
      console.log(response);

      dispatch({
        type: ADD_TASK,
        payload: task
      }) 
    } catch (error) {
      
    }
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