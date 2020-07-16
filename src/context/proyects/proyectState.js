import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import proyectContext from './proyectContext';
import proyectReducer from './proyectReducer';
import {FORM_PROYECT, GET_PROYECTS, ADD_PROYECT, VALIDATE_FORM, ACTUAL_PROYECT} from '../../types';

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

  const addProyect = proyect => {
    proyect.id = uuidv4();
    // Insertar proyecto en el State
    dispatch({
      type: ADD_PROYECT,
      payload: proyect
    })
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
      }}
    >
      {props.children}
    </proyectContext.Provider>
  );
}
 
export default ProyectState;
