import {FORM_PROYECT} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case FORM_PROYECT:
      return {
        ...state,
        form: true
      }
      
    default:
      return state
  }
}