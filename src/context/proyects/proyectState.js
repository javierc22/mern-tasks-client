import React, {useReducer} from 'react';
import proyectContext from './proyectContext';
import proyectReducer from './proyectReducer';
import {FORM_PROYECT} from '../../types';

const ProyectState = props => {

  const initialState = {
    proyects : [
      { id: 1, name: 'Tienda Virtual' },
      { id: 2, name: 'Intranet' },
      { id: 3, name: 'Diseño de Sitio web' },
      { id: 4, name: 'MERN '}
    ],
    form: false
  }

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectReducer, initialState)

  const showForm = () => {
    dispatch({
      type: FORM_PROYECT
    })
  }

  return (
    <proyectContext.Provider
      value={{
        form: state.form,
        proyects: state.proyects,
        showForm
      }}
    >
      {props.children}
    </proyectContext.Provider>
  );
}
 
export default ProyectState;
