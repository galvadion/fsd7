import React, {useState} from "react";


const Greeting = () => {
    const [name,setName] = useState("");
    const [message,setMessage] = useState("");

    const setGreeting = () => {
        let trimmedName = name.trim()
        if(isEmpty(trimmedName)) setMessage('Hello, my friend.')
        else if(isUpperCase(trimmedName)) setMessage(`HELLO ${trimmedName}`)
        else setMessage(`Hello, ${trimmedName}.`)
    }

    const isUpperCase = (name) => name.toUpperCase() == name

    const isEmpty = (name) => name == ""

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