import React, {useReducer} from 'react';
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import axiosClient from "../../config/axios";

import {
  SUCCESSFUL_REGISTRATION,
  REGISTER_ERROR,
  GET_USER,
  SUCCESSFUL_LOGIN,
  LOGIN_ERROR,
  SIGN_OUT
} from '../../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Funciones
  const registerUser = async datos => {
    try {
      const response = await axiosClient.post('/api/users', datos);
      console.log(response);
      dispatch({
        type: SUCCESSFUL_REGISTRATION
      })
    } catch (error) {
      console.log(error);

      dispatch({
        type: REGISTER_ERROR
      })
    }
  }
  
  
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        registerUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;
