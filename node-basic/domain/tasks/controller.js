let tasks = require('./repository')

function addTask(req,res) {
    let task = req.body;
    tasks.push(task)
    res.send({message: 'Se ha agregado la tarea con éxito',tasks: tasks})
}

const updateTask = (req,res)=>{
    let newTask = req.body;
    tasks = tasks.filter(task => task.id != newTask.id)
    tasks.push(newTask);
    res.send({message: 'Se ha actualizado la tarea con éxito',tasks: tasks})
}

const deleteTask = (req,res) =>{
    tasks = tasks.filter(task => task.id != req.params.id)
    res.send({message: 'Se ha eliminado la tarea con éxito',tasks: tasks})
}

const getTasks= (req,res) =>{
    res.send(tasks)
}

module.exports = {
    addTask,
    deleteTask,
    getTasks,
    updateTask
}