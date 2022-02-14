import React from 'react';
import { useState, useEffect } from 'react';


const AddTask = (props) => {  // {task, priority}

    const [taskName,setTaskName] = useState('Pepito')
    const [priority,setPriority] = useState('')
  
    const addTask = () => {
      props.addTask({priority: priority, task: taskName}) //Llama al addTask del padre
      setTaskName('')
      setPriority('')
    }
  
    return (
    <form action="javascript:void(0);">
          <input
            id="task"
            type="text"
            value={taskName}
            name="task"
            onChange={(event) => setTaskName(event.target.value)}
            placeholder="Descripción de la tarea"
          />
          <select name="priority" id="priority"
            value={priority} 
            onChange={e=> setPriority(e.target.value) }>
              <option value="" disabled selected>Prioridad</option>
              <option value="priority-low">baja</option>
              <option value="priority-medium">media</option>
              <option value="priority-high">alta</option>
          </select>
          <button id="add" onClick={addTask}>Agregar!</button>
        </form>
    )
  }
  export default AddTask;