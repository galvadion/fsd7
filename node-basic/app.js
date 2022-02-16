const {products,cantidad} = require('./products')
const cowsay = require('cowsay')

products.forEach((value)=>{
    console.log(value)
})

console.log(
    cowsay.say(
        {
            text: `Hay ${cantidad} procuctos`,
            e: 'e.e',
            T: 'U'
        }
    )
)

const http = require("http")

const port = process.env.PORT || 4000

const server = http.createServer((req,res)=> {
    res.statusCode =200
    res.setHeader("Content-type","text/html")
    res.end("<p>HOLA MUNDO</p>")
})

server.listen(port, ()=>{
    console.log(
        cowsay.say({
            text: "Escuchando en "+ port,
            e:'U -',
            T: 'P'}
        )
    )
})