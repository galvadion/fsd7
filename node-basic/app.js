const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')


const {products,cantidad} = require('./products')
const cowsay = require('cowsay')

const greetingRoutes = require('./domain/greeting/routes')
const trianglesRoutes = require('./routes/triangles')
const tasksRoutes = require('./domain/tasks/routes')
const errorRoutes = require('./routes/errors')

var app = express();

//middlewares  -- metodo que se ejecuta antes de que llegue a un controlador 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //Cuando reciba algun tipo de dato en un peticion la convierto en json, en cada petion

app.use(cors())

app.get('/',(req,res)=> {
    res.send("Hello World")
})

app.use('/tasks',tasksRoutes);
app.use('/hola',greetingRoutes);
app.use('/triangles',trianglesRoutes);
app.use('/error',errorRoutes);

app.get('/*',(req,res)=> {
    res.send("Endpoint aún no disponible")
})

app.use((err,req,res,next)=>{
    console.log(err)
    console.log(req.body)
    res.status(500)
    res.send('Ha ocurrido un error: '+ err.message)
})

app.listen(4000)
