import React, {useContext, useEffect} from 'react';
import Proyect from './Proyect';
import proyectContext from '../../context/proyects/proyectContext';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListProyects = () => {

  // Extraer proyectos del State Inicial
  const proyectsContext = useContext(proyectContext)
  const { proyects, getProyects } = proyectsContext;

  // Obtener proyectos cuando carga el componente
  useEffect(() =>{
    getProyects();
    // eslint-disable-next-line
  }, []);

  // Verificar si el State 'proyects' tiene contenido
  if (proyects.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="j-list-proyects">
      <TransitionGroup>
        {proyects.map(proyect => (
          <CSSTransition
            key={proyect.id}
            timeout={200}
            classNames="j-proyect"
          >
            <Proyect
              proyect={proyect}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
}
 
export default ListProyects;