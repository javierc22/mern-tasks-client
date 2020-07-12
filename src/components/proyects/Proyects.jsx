import React from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import FormTask from '../tasks/FormTask';
import ListTasks from '../tasks/ListTasks';

const Proyects = () => {
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