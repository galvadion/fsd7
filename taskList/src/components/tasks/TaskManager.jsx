import React,{ useEffect, useState }  from 'react'
import TaskList from './TaskList';
import AddTask from './AddTask';
import PacmanLoader from 'react-spinners/PacmanLoader'

function TaskManager() {

      /* Declaración de una variable de estado 
     taskList, con su asignador y el valor por defecto vacio */
  const [taskList,setTaskList] = useState([])
  const [loading, setLoading] = useState(true)
  const [hasAnError, setHasError] = useState(false)

  function addTask(task){
    // descomprimo task, y le agrego una nueva propiedad llamada id. {...task,id:sequencer}
    setLoading(true)
    fetch("http://localhost:4000/tareas", //Le realizo un post a esta ruta
      {
        method:'POST',
        headers: { // Encabezados de la solicitud (LAS REGLAS)
          'Accept': 'application/json', // Que tipo de datos, voy a aceptar como respuesta del servidor
          'Content-Type': 'application/json' // Que tipo de datos, le voy a mandar al servidor.
        },
        body: JSON.stringify(task) // Convertir my objeto en un string de forma de json { text: 'aflasfaf', priority: 'sasa' }
      }
    )
      .then((data) => data.json())
      .then(data =>{
        setTaskList(taskList.concat(data))
      })
      .catch(e=>{
        console.log("Hubo un error")
        setHasError(true)
      })
      .finally(() => setLoading(false))
  }

  useEffect(()=>{
    fetch("http://localhost:4000/tareas")
      .then((data) => data.json())
      .then(data =>{
        setTaskList(data)
      })
      .catch(e=>{
        console.log("Hubo un error")
        setHasError(true)
      })
      .finally(() =>setLoading(false))
  },
    []) 

    return (
        <>
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
      </>
    )

}

export default TaskManager;