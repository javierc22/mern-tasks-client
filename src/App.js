import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import NewAccount from './components/NewAccount';
import Proyects from './components/Proyects';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/nueva-cuenta' component={NewAccount}/>
        <Route exact path='/proyectos' component={Proyects}/>
      </Switch>
    </Router>
  );
}

export default App;