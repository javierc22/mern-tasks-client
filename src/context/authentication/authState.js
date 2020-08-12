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
  const registerUser = async data => {
    console.log(data)
    try {
      const response = await axiosClient.post('/api/users', data);
      console.log(response.data);
      dispatch({
        type: SUCCESSFUL_REGISTRATION,
        payload: response.data
      })

      // Obtener el usuario
      authenticateUser();
    } catch (error) {
      // console.log(error.response.data.msg);
      const alert = {
        message: error.response.data.msg,
        category: 'j-alert-error'
      }

      dispatch({
        type: REGISTER_ERROR,
        payload: alert
      })
    }
  }

  // Retorna el usuario autenticado
  const authenticateUser = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      
    }

    try {
      const response = await axiosClient.get('/api/auth');
      console.log(response);
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR
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
