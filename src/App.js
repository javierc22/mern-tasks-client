import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Proyects from './components/proyects/Proyects';

import ProyectState from './context/proyects/proyectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';
import tokenAuth from './config/token';
import PrivateRoute from './components/routes/PrivateRoute';

// Revisar si tenemos un Token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}


function App() {
  return (
    <ProyectState>
      <TaskState>
        <AlertState>
          <AuthState>            
            <Router>
              <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/nueva-cuenta' component={NewAccount}/>
                <PrivateRoute exact path='/proyectos' component={Proyects}/>
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProyectState>
  );
}

export default App;