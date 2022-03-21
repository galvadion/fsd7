const express = require('express')
const router = express.Router();

router.get('/',(req,res,next)=> {
    setTimeout(()=>{
        try{
            sarasao.o = 'Hello Peter, said Doctor Octopus, and fans went Wild'
            res.send("Hello World")
        }catch(err){
            next(err)
        }   
    },200)
})

module.exports = router