import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Proyects from './components/proyects/Proyects';

import ProyectState from './context/proyects/proyectState';
import TaskState from './context/tasks/taskState';
import AlertState from './context/alerts/alertState';


function App() {
  return (
    <ProyectState>
      <TaskState>
        <AlertState>
          <Router>
            <Switch>
              <Route exact path='/' component={Login}/>
              <Route exact path='/nueva-cuenta' component={NewAccount}/>
              <Route exact path='/proyectos' component={Proyects}/>
            </Switch>
          </Router>
        </AlertState>
      </TaskState>
    </ProyectState>
  );
}

export default App;