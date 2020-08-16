import { 
  PROYECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATUS_TASK,
  CURRENT_TASK,
  UPDATE_TASK,
  CLEAR_TASK
} from '../../types';

export default (state, action) => {
  switch (action.type) {

    case PROYECT_TASKS:
      return {
        ...state,
        proyectTasks: action.payload
      }

    case ADD_TASK:
      return {
        ...state,
        // Agrega la nueva tarea al final de la lista
        // tasks: [...state.tasks, action.payload],
        // Agrega la nueva tarea al principio de la lista
        proyectTasks: [action.payload, ...state.proyectTasks],
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
        proyectTasks: state.proyectTasks.filter( task => task.id !== action.payload )
      }

    case UPDATE_TASK:
    case STATUS_TASK:
      return {
        ...state,
        proyectTasks: state.proyectTasks.map( task => task.id === action.payload.id ? action.payload : task )
      }

    case CURRENT_TASK:
      return {
        ...state,
        selectedTask: action.payload
      }

    case CLEAR_TASK:
      return {
        ...state,
        selectedTask: null
      }

    default:
      return state
  }
}