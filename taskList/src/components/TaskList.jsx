import React from 'react';

// cada componente recibe un único parametro llamado props (properties).
// 
const TaskList = ({taskList}) => { //desestructuring de un objeto 
    return (
      <ul id="lista-tareas">
          {
            taskList.map((value) => {
              return <li key={value.id} className={value.priority}>{value.id} - {value.text}</li>
            })
          }
        </ul>
    )
  }


  export default TaskList