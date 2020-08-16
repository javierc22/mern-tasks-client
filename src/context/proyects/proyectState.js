import React, {useReducer} from 'react';
import proyectContext from './proyectContext';
import proyectReducer from './proyectReducer';
import {
  FORM_PROYECT, 
  GET_PROYECTS, 
  ADD_PROYECT, 
  VALIDATE_FORM, 
  ACTUAL_PROYECT,
  DELETE_PROYECT,
  PROJECT_ERROR
} from '../../types';

import axiosClient from '../../config/axios';

const ProyectState = props => {

  const initialState = {
    proyects: [],
    form: false,
    errorForm: false,
    proyect: null,
    message: null,
  }

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectReducer, initialState)

  const showForm = () => {
    dispatch({
      type: FORM_PROYECT
    })
  }

  // Obtener los proyectos
  const getProyects = async () => {
    try {
      const response = await axiosClient.get('/api/projects');

      dispatch({
        type: GET_PROYECTS,
        payload: response.data.projects
      })      
    } catch (error) {
      const alert = {
        msg: 'Hubo un error',
        category: 'j-alert-error'
      }

      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })
    }
  }

  // Agregar nuevo proyecto
  const addProyect = async project => {
    
    try {
      const response = await axiosClient.post('/api/projects', project);
      // Insertar proyecto en el State
      dispatch({
        type: ADD_PROYECT,
        payload: response.data
      })
    } catch (error) {
      const alert = {
        msg: 'Hubo un error',
        category: 'j-alert-error'
      }

      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })
    }
  }

  const showError = () => {
    dispatch({
      type: VALIDATE_FORM
    })
  }

  // Selecciona el proyecto que al que el usuario da click
  const actualProyect = proyectId => {
    dispatch({
      type: ACTUAL_PROYECT,
      payload: proyectId
    })
  }

  // Elimina un proyecto
  const deleteProyect = async projectId => {
    try {
      await axiosClient.delete(`/api/projects/${projectId}`);

      dispatch({
        type: DELETE_PROYECT,
        payload: projectId
      })
    } catch (error) {
      const alert = {
        msg: 'Hubo un error',
        category: 'j-alert-error'
      }

      dispatch({
        type: PROJECT_ERROR,
        payload:alert
      })
    }
  }

  return (
    <proyectContext.Provider
      value={{
        form: state.form,
        errorForm: state.errorForm,
        proyects: state.proyects,
        proyect: state.proyect,
        message: state.message,
        showForm,
        getProyects,
        addProyect,
        showError,
        actualProyect,
        deleteProyect,
      }}
    >
      {props.children}
    </proyectContext.Provider>
  );
}
 
export default ProyectState;
