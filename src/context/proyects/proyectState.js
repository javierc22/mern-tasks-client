import React, {useReducer} from 'react';
import proyectContext from './proyectContext';
import proyectReducer from './proyectReducer';
import {FORM_PROYECT} from '../../types';

const ProyectState = props => {

  const initialState = {
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
        showForm
      }}
    >
      {props.children}
    </proyectContext.Provider>
  );
}
 
export default ProyectState;
