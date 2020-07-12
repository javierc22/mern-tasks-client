import React, {useReducer} from 'react';
import proyectContext from './proyectContext';
import proyectReducer from './proyectReducer';

const ProyectState = props => {

  const initialState = {
    form: false
  }

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectReducer, initialState)

  return (
    <proyectContext.Provider
      value={{
        form: state.form
      }}
    >
      {props.children}
    </proyectContext.Provider>
  );
}
 
export default ProyectState;
