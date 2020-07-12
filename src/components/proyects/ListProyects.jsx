import React, {useContext} from 'react';
import Proyect from './Proyect';
import proyectContext from '../../context/proyects/proyectContext';

const ListProyects = () => {

  // Extraer proyectos del State Inicial
  const proyectsContext = useContext(proyectContext)
  const { proyects } = proyectsContext;

  // Verificar si el State 'proyects' tiene contenido
  if (proyects.length === 0) return null;

  return (
    <ul className="j-list-proyects">
      {proyects.map(proyect => (
        <Proyect
          key={proyect.id}
          proyect={proyect}
        />
      ))}
    </ul>
  );
}
 
export default ListProyects;