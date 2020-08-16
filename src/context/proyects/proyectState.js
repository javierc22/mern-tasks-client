import React, {useReducer} from 'react';
import proyectContext from './proyectContext';
import proyectReducer from './proyectReducer';
import {
  FORM_PROYECT, 
  GET_PROYECTS, 
  ADD_PROYECT, 
  VALIDATE_FORM, 
  ACTUAL_PROYECT,
  DELETE_PROYECT
} from '../../types';

import axiosClient from '../../config/axios';

const ProyectState = props => {

  const proyects = [
    { id: 1, name: 'Tienda Virtual' },
    { id: 2, name: 'Intranet' },
    { id: 3, name: 'Diseño de Sitio web' },
    { id: 4, name: 'MERN '}
  ]

  const initialState = {
    proyects: [],
    form: false,
    errorForm: false,
    proyect: null,
  }

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectReducer, initialState)

  const showForm = () => {
    dispatch({
      type: FORM_PROYECT
    })
  }

  const getProyects = () => {
    dispatch({
      type: GET_PROYECTS,
      payload: proyects
    })
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
      console.log(error);
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
  const deleteProyect = proyectId => {
    dispatch({
      type: DELETE_PROYECT,
      payload: proyectId
    })
  }

  return (
    <proyectContext.Provider
      value={{
        form: state.form,
        errorForm: state.errorForm,
        proyects: state.proyects,
        proyect: state.proyect,
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
