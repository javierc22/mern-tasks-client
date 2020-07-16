import { 
  PROYECT_TASKS 
} from '../../types';

export default (state, action) => {
  switch (action.type) {

    case PROYECT_TASKS:
      return {
        ...state,
        proyectTasks: state.tasks.filter( task => task.proyectId === action.payload )
      }

    default:
      return state
  }
}