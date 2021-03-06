import {
  FORM_PROYECT, 
  GET_PROYECTS, 
  ADD_PROYECT, 
  VALIDATE_FORM, 
  ACTUAL_PROYECT,
  DELETE_PROYECT,
  PROJECT_ERROR
} from '../../types';

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
        form: false,
        errorForm: false
      }

    case VALIDATE_FORM:
      return {
        ...state,
        errorForm: true
      }
    
    case ACTUAL_PROYECT:
      return {
        ...state,
        proyect: state.proyects.filter( proyect => proyect._id === action.payload )
      }

    case DELETE_PROYECT:
      return {
        ...state,
        proyects: state.proyects.filter( proyect => proyect._id !== action.payload ),
        proyect: null
      }

    case PROJECT_ERROR:
      return {
        ...state,
        message: action.payload
      }

    default:
      return state
  }
}