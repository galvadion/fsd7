const express = require('express')
var cors = require('cors')

const {products,cantidad} = require('./products')
const cowsay = require('cowsay')

const tasks = require('./routes/tasks/tasks')

var app = express();

app.use(cors())

products.forEach((value)=>{
    console.log(value)
})

function suma(a,b){
    return a+b;
}

const resta = (a,b) => a-b

const multiplicacion = (a,b) =>  a*b

let a = resta(100,50);
let b = multiplicacion(5,10);

// http://localhost:4000/suma?a=x&b=y

console.log(suma(a,b))

console.log(suma(10,5))

console.log(suma(resta(multiplicacion(5,10),50),60))

const http = require("http")

const port = process.env.PORT || 4000

app.get('/',(req,res)=> {
    res.send("HOLA MUNDO")
})

app.get('/tareas',(req,res)=>{
    res.send(tasks)
})

app.get('/hola/:user',(req,res)=>{
    res.send(`Hola pibe ${req.params.user}`)
})

app.get('/*',(req,res)=> {
    res.send("Endpoint aún no disponible")
})


/*
const server = http.createServer((req,res)=> {
    res.statusCode =200
    res.setHeader("Content-type","text/html")
    res.end("<p>HOLA MUNDO</p>")
})*/

app.listen(4000)

/*function greet(){
    console.log(
        cowsay.say({
            text: "Hola esdrújulo, ñato toy escuchando en: "+ port,
            e:'U -',
            T: 'P'}
        )
    )
}

server.listen(port, greet)*/