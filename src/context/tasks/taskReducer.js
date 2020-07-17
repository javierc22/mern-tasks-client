import { 
  PROYECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK
} from '../../types';

export default (state, action) => {
  switch (action.type) {

    case PROYECT_TASKS:
      return {
        ...state,
        proyectTasks: state.tasks.filter( task => task.proyectId === action.payload )
      }

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        errorTask: false
      }
    
    case VALIDATE_TASK:
      return {
        ...state,
        errorTask: true
      }

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter( task => task.id !== action.payload )
      }

    default:
      return state
  }
}