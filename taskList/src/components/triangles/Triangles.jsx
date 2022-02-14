import React,{useEffect, useState} from 'react'


function Triangles(){

    const [sideA, setSideA] = useState(0)
    const [sideB, setSideB] = useState(0)
    const [sideC, setSideC] = useState(0)

    const [triangles, setTriangles] = useState([])

    const calculate = () => {        
        if(isEquilaterus()){
            setTriangles(triangles.concat(`${sideA} Equilatero`))
        }else if(sideA == sideB  || sideB == sideC || sideA == sideC){
            setTriangles(triangles.concat(`${sideA}-${sideB}-${sideC} Isosceles`))
        }else setTriangles(triangles.concat(`${sideA}-${sideB}-${sideC} Escaleno`))
    }

    useEffect(()=>{
        resetSides()
    },[triangles])

    const isEquilaterus = () => sideA == sideB && sideA == sideC
    
    const resetSides = () => {
        setSideA(0)
        setSideB(0)
        setSideC(0)
    }

    return(
        <>
            <input value={sideA} id="sideA" onChange={(e)=> setSideA(e.target.value)} />
            <input value={sideB} onChange={(e)=> setSideB(e.target.value)}/>
            <input value={sideC} onChange={(e)=> setSideC(e.target.value)}/>
            <button onClick={calculate} >Calcular</button>
            <ul>
            {
                triangles.map((value,index)=>{
                    return (
                        <li key={index}>{value} </li>
                    )
                })
            }
            </ul>
        </>
    )
}

export default Triangles;