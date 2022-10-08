import React, { useState } from "react";

function Todo({ id, task = "default", remove }) {

    const handleDelete = () => remove(id);

    return (
        <div>
            <li>{task}</li>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}



export default Todo;