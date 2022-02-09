import logo from './logo.svg';
import './assets/App.css';
import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import PacmanLoader from 'react-spinners/PacmanLoader'

function App() {

  /* Declaración de una variable de estado 
     taskList, con su asignador y el valor por defecto vacio */
  const [taskList,setTaskList] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasAnError, setHasError] = useState(false)


  function addTask(task){
    // descomprimo task, y le agrego una nueva propiedad llamada id. {...task,id:sequencer}
    
    setTaskList(taskList.concat(task))
  }

  useEffect(()=>{
    fetch("http://localhost:4000/tareas")
      .then((data) => data.json())
      .then(data =>{
        setTaskList(data)
        setLoading(false)
      })
      .catch(e=>{
        console.log("Hubo un error")
        setHasError(true)
        setLoading(false)
      })
  },[])

  return (
    <main>
      <h1>Lista de tareas!</h1>

      <AddTask addTask={addTask} taskListLength={taskList.length}/>

      <h3>Tareas</h3>
      <PacmanLoader loading={loading} ></PacmanLoader>
      <TaskList taskList={taskList} />
      {
        hasAnError && 
        (
          "Ha ocurrido un error"
        )
      }
      <p>
        Para agregar tareas vamos a tener que hablar de eventos, el DOM y cómo
        interactuar con él
      </p>
    </main>
  );
}


export default App;
