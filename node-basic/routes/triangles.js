const express = require('express')
const router = express.Router();

let triangles = []

// http://localhost:4000/triangles?sideA=1&sideB=2&sideC=1
router.get('/',(req,res)=>{
    let sideA = Number(req.query.sideA);
    let sideB = Number(req.query.sideB);
    let sideC = Number(req.query.sideC);
    if(isNaN(sideA)|| isNaN(sideB) || isNaN(sideC)){
        throw new Error("One of the values is not valid")
    }
    if(sideA==0|| sideB == 0 || sideC == 0 ){
        throw new Error("One of the values can't be ZERO")
    }
    if(sideA + sideB <= sideC || sideB + sideC <= sideA || sideA + sideC <= sideB ){
        throw new Error("This is no valid triangle")
    }
    if(isEquilaterus(sideA,sideB,sideC)){
        triangles.push(`${sideA} ˌēkwəˈladərəl`)
    }else if(sideA == sideB  || sideB == sideC || sideA == sideC){
        triangles.push(`${sideA}-${sideB}-${sideC} īˈsäsəˌlēz`)
    }else triangles.push(`${sideA}-${sideB}-${sideC} ˈskālēn`)
    res.send(triangles)
})

const isEquilaterus = (sideA,sideB,sideC) => sideA == sideB && sideA == sideC

module.exports = router;