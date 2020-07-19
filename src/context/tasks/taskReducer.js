import { 
  PROYECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATUS_TASK
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
        // Agrega la nueva tarea al final de la lista
        // tasks: [...state.tasks, action.payload],
        // Agrega la nueva tarea al principio de la lista
        tasks: [action.payload, ...state.tasks],
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

    case STATUS_TASK:
      return {
        ...state,
        tasks: state.proyectTasks.map( task => task.id === action.payload.id ? action.payload : task )
      }

    default:
      return state
  }
}