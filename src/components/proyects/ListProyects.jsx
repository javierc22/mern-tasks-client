import React from 'react';
import Proyect from './Proyect';

const ListProyects = () => {

  const proyects = [
    {name: 'Tienda Virtual'},
    {name: 'Intranet'},
    {name: 'Diseño de Sitio Web'}
  ]

  return (
    <ul className="j-list-proyects">
      {proyects.map(proyect => (
        <Proyect 
          proyect={proyect}
        />
      ))}
    </ul>
  );
}
 
export default ListProyects;