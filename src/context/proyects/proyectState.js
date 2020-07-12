import React, {useReducer} from 'react';
import proyectContext from './proyectContext';
import proyectReducer from './proyectReducer';
import {FORM_PROYECT, GET_PROYECTS} from '../../types';

const ProyectState = props => {

  const proyects = [
    { id: 1, name: 'Tienda Virtual' },
    { id: 2, name: 'Intranet' },
    { id: 3, name: 'Diseño de Sitio web' },
    { id: 4, name: 'MERN '}
  ]

  const initialState = {
    proyects: [],
    form: false
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

  return (
    <proyectContext.Provider
      value={{
        form: state.form,
        proyects: state.proyects,
        showForm,
        getProyects
      }}
    >
      {props.children}
    </proyectContext.Provider>
  );
}
 
export default ProyectState;
