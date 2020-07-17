import React, {useContext, useState} from 'react';
import proyectContext from '../../context/proyects/proyectContext';
import taskContext from '../../context/tasks/taskContext';

const FormTask = () => {

  // Extraer si un proyecto está seleccionado
  const proyectsContext = useContext(proyectContext);
  const { proyect } = proyectsContext;

  // Obtener la función del context de Tarea
  const tasksContext = useContext(taskContext);
  const { errorTask, addTask, validateTask, getTasks } = tasksContext;

  // State del Formulario
  const [task, setTask] = useState({
    name: ''
  })

  // Extraer el nombre del proyecto
  const { name } = task;

  // Si no hay proyecto seleccionado, no se muestra nada
  if (!proyect) return null;

  // Array destructuring para extraer el proyecto actual
  const [actualProyect] = proyect;

  // Leer los valores del Formulario
  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  // Submit formulario
  const onSubmit = e => {
    e.preventDefault();

    // Validación
    if (name.trim() === ''){
      validateTask();
      return;
    }

    // Agregar la nueva tarea al State de tareas
    task.proyectId = actualProyect.id;
    task.status = false;
    addTask(task);

    // Obtener y filtrar las tareas del proyecto actual
    getTasks(actualProyect.id);

    // Reiniciar el formulario
    setTask({
      name: ''
    });
  }

  return (
    <div className="j-form">
      <form
        onSubmit={onSubmit}
      >
        <div className="j-container-input">
          <input 
            type="text"
            className="j-input-text"
            placeholder="Nombre Tarea..."
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="j-container-input">
          <input 
            type="submit"
            className="j-btn j-btn-primary j-btn-submit j-btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>

      { errorTask ? <p className="j-message j-error">El nombre de la tarea es obligatorio</p> : null }
    </div>
  );
}
 
export default FormTask;