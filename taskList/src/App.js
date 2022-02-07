import logo from './logo.svg';
import './assets/App.css';
import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {

  /* Declaración de una variable de estado 
     taskList, con su asignador y el valor por defecto vacio */
  const [taskList,setTaskList] = useState([{priority:'prioridad-baja',text:'Pasear al Toby',id:1 },
  {priority:'prioridad-media',text:'Hacer ejercicios JS',id:2},
  {priority:'prioridad-alta',text:'Practicar JS',id:3 }])

  function addTask(task){
    // descomprimo task, y le agrego una nueva propiedad llamada id. {...task,id:sequencer}
    
    setTaskList(taskList.concat(task))
  }

  return (
    <main>
      <h1>Lista de tareas!</h1>

      <AddTask addTask={addTask} taskListLength={taskList.length}/>

      <h3>Tareas</h3>
      <TaskList taskList={taskList} />

      <p>
        Para agregar tareas vamos a tener que hablar de eventos, el DOM y cómo
        interactuar con él
      </p>
    </main>
  );
}


export default App;
