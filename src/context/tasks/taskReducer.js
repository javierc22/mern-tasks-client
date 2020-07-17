import { 
  PROYECT_TASKS,
  ADD_TASK
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
        tasks: [...state.tasks, action.payload]
      }

    default:
      return state
  }
}