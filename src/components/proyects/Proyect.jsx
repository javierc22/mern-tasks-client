import React, {useContext} from 'react';
import proyectContext from '../../context/proyects/proyectContext';

const Proyect = ({proyect}) => {

  // Obtener el State de "proyectos"
  const proyectsContext = useContext(proyectContext);
  const { actualProyect } = proyectsContext;

  return (
    <li>
      <button
        type="button"
        className="j-btn j-btn-blank"
        onClick={ () => actualProyect(proyect.id) }
      >
        {proyect.name}
      </button>
    </li>
  );
}
 
export default Proyect;