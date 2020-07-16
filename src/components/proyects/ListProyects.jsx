import React, {useContext, useEffect} from 'react';
import Proyect from './Proyect';
import proyectContext from '../../context/proyects/proyectContext';

const ListProyects = () => {

  // Extraer proyectos del State Inicial
  const proyectsContext = useContext(proyectContext)
  const { proyects, getProyects } = proyectsContext;

  // Obtener proyectos cuando carga el componente
  useEffect(() =>{
    getProyects();
  }, []);

  // Verificar si el State 'proyects' tiene contenido
  if (proyects.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

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