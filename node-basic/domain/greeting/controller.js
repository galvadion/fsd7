const getGreet = (req,res)=>{
    var name = req.params.user
    if(isEmptyOrNull(name)) res.send("Hello, my friend.")
    else if(isUpperCase(name)) res.send(`HELLO ${name}`)
    else res.send(`Hello, ${name}`)
}

const isUpperCase = (name) => name.toUpperCase() == name

// name: Pepe  -> name == '' (NO) => False || name == undefined (no) => False | False or False = False (0+0 = 0)
// name: undefined -> name == '' (no) => False || name == undefined (si) => True | False or True = True ( 0+1 = 1)
// name: "" -> name == "" (si) => True || name == undefined (no) => False | True or False = True (1+0 = 1)
const isEmptyOrNull = (name) => name == "" || name == undefined

module.exports = {getGreet}