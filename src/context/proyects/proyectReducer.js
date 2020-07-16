import {FORM_PROYECT, GET_PROYECTS, ADD_PROYECT} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case FORM_PROYECT:
      return {
        ...state,
        form: true
      }
    
    case GET_PROYECTS:
      return {
        ...state,
        proyects: action.payload
      }

    case ADD_PROYECT:
      return {
        ...state,
        proyects: [...state.proyects, action.payload],
        form: false
      }

    default:
      return state
  }
}