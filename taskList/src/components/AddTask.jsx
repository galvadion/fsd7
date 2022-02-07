import React from 'react';
import { useState, useEffect } from 'react';


const AddTask = (props) => {

    const [taskName,setTaskName] = useState('Pepito')
    const [priority,setPriority] = useState('')

    const [sequencer, setSequencer] = useState(props.taskListLength+1)

    useEffect(() => {
      setTaskName('')
      setPriority('')
    },
    [sequencer])

  
    const addTask = () => {
      props.addTask({priority: priority, text: taskName, id: sequencer})
      setSequencer(sequencer+1)
    }
  
    return (
    <form action="javascript:void(0);">
          <input
            id="tarea"
            type="text"
            value={taskName}
            name="tarea"
            onChange={(event) => setTaskName(event.target.value)}
            placeholder="Descripción de la tarea"
          />
          <select name="prioridad" id="prioridad"
            value={priority} 
            onChange={e=> setPriority(e.target.value) }>
              <option value="" disabled selected>Prioridad</option>
              <option value="prioridad-baja">baja</option>
              <option value="prioridad-media">media</option>
              <option value="prioridad-alta">alta</option>
          </select>
          <button id="agregar" onClick={addTask}>Agregar!</button>
        </form>
    )
  }
  export default AddTask;