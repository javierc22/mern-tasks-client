import {
  SUCCESSFUL_REGISTRATION,
  REGISTER_ERROR,
  GET_USER,
  SUCCESSFUL_LOGIN,
  LOGIN_ERROR,
  SIGN_OUT
} from '../../types';

export default (state, action) => {
  switch (action.type) {

    case SUCCESSFUL_REGISTRATION:
    case SUCCESSFUL_LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authenticated: true,
        message: null,
        loading: false
      }
    case GET_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false
      }

    case SIGN_OUT:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        message: action.payload,
        user: null,
        authenticated: false,
        loading: false
      }

    default:
      return state;
  }
}