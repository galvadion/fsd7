import React from 'react'
import {Link} from 'react-router-dom';

function Buttons() {

    return (
        <>
            <Link to="/triangles">Triangles</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/greeting">Greeting</Link>
        </>
    )
}

export default Buttons;