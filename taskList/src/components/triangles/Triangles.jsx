import React,{useEffect, useState} from 'react'


function Triangles(){

    const [sideA, setSideA] = useState(0)
    const [sideB, setSideB] = useState(0)
    const [sideC, setSideC] = useState(0)

    const [triangles, setTriangles] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const calculate = () => {        
        fetch(`http://localhost:4000/triangles?sideA=${sideA}&sideB=${sideB}&sideC=${sideC}`)
        .then(data => {
            if(data.status == 200)
                return data.json()
            else throw new Error(data.text().then(data=> setErrorMessage(data)))
        })
        .then(data => {
                console.log(data)
                setTriangles(data)
                setErrorMessage('')
            }    
        )
    }

    useEffect(()=>{
        resetSides()
    },[triangles])

    
    
    const resetSides = () => {
        setSideA(0)
        setSideB(0)
        setSideC(0)
    }

    return(
        <>
            <input value={sideA} type="number" id="sideA" 
                onChange={(e)=> setSideA(e.target.value)} />
            <input value={sideB} type="number" 
                onChange={(e)=> setSideB(e.target.value)}/>
            <input value={sideC} type="number" 
                onChange={(e)=> setSideC(e.target.value)}/>
            <button onClick={calculate} >Calcular</button>
            {errorMessage}
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