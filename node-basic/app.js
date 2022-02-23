const {products,cantidad} = require('./products')
const cowsay = require('cowsay')

products.forEach((value)=>{


    console.log(value)
})

function suma(a,b){
    console.log(`El valor de a es ${a}`)
    console.log(`El valor de b es ${b}`)
    return a+b;
}

const resta = (a,b) => {
    console.log(`El valor de a es ${a}`)
    console.log(`El valor de b es ${b}`)
    return a-b;
}

const multiplicacion = (a,b) => {
    console.log(`El valor de a es ${a}`) // ('El valor de a es ' + a)
    console.log(`El valor de b es ${b}`)
    return a*b
}

let a = resta(100,50);
let b = multiplicacion(5,10);

// http://localhost:4000/suma?a=x&b=y

console.log(suma(a,b))

console.log(suma(10,5))

console.log(suma(resta(multiplicacion(5,10),50),60))

const http = require("http")

const port = process.env.PORT || 4000

const server = http.createServer((req,res)=> {
    res.statusCode =200
    res.setHeader("Content-type","text/html")
    res.end("<p>HOLA MUNDO</p>")
})

function greet(){
    console.log(
        cowsay.say({
            text: "Hola pibe, toy escuchando en: "+ port,
            e:'U -',
            T: 'P'}
        )
    )
}

server.listen(port, greet)