import React, {useContext, useEffect} from 'react';
import Proyect from './Proyect';
import proyectContext from '../../context/proyects/proyectContext';
import AlertContext from '../../context/alerts/alertContext';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListProyects = () => {

  // Extraer proyectos del State Inicial
  const proyectsContext = useContext(proyectContext)
  const { proyects, getProyects, message } = proyectsContext;

  const alertContext = useContext(AlertContext)
  const { alert, showAlert } = alertContext;

  // Obtener proyectos cuando carga el componente
  useEffect(() =>{
    // Si hay un error
    if (message) {
      showAlert(message.msg, message.category)
    }

    getProyects();
    // eslint-disable-next-line
  }, [message]);

  // Verificar si el State 'proyects' tiene contenido
  if (proyects.length === 0) return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="j-list-proyects">
      { alert ? ( <div className={`j-alert ${alert.category} `}>{alert.message}</div> ) : null  }
      <TransitionGroup>
        {proyects.map(proyect => (
          <CSSTransition
            key={proyect._id}
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