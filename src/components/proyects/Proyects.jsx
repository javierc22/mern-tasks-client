import React, {useContext, useEffect} from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import FormTask from '../tasks/FormTask';
import ListTasks from '../tasks/ListTasks';
import AuthContext from '../../context/authentication/authContext';

const Proyects = () => {
  // Extraer la información de autenticación
  const authContext = useContext(AuthContext);
  const { authenticateUser } = authContext;

  useEffect( () => {
    authenticateUser();
  }, []);

  return (
    <div className="j-container-app">
      <Sidebar />

      <div className="j-section-main">
        <Header />

        <main>
          <FormTask />
          <div className="j-container-tasks">
            <ListTasks />
          </div>
        </main>
      </div>
    </div>
  );
}
 
export default Proyects;