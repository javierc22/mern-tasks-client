import React from 'react';
import NewProyect from "../proyects/NewProyect";
import ListProyects from "../proyects/ListProyects";


const Sidebar = () => {
  return (
    <aside>
      <h1>MERN<span>Tasks</span></h1>

      <NewProyect />
      
      <div className="j-proyects">
        <h2>Tus Proyectos</h2>

        <ListProyects />
      </div>
    </aside>
  );
}

export default Sidebar; 