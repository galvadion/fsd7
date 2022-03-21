import React, {useState} from "react";

const Greeting = () => {
    const [name,setName] = useState("");
    const [message,setMessage] = useState("");

    const setGreeting = () => {
        let trimmedName = name.trim()
        fetch('http://localhost:4000/hola/'+trimmedName)
        .then(data => data.text())
        .then((data=>setMessage(data)))
       
    }

    return (
        <>
            <input 
                value={name} 
                onChange={(e) => setName(e.target.value) }
                onBlur={setGreeting}
            />
            {message}
        </>
    )
}

export default Greeting;