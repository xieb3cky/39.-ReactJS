import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

/**
 * Form for creating a new todo to add to the list.
 *
 */


const NewTodoForm = ({ addTodo }) => {
    const [task, setTask] = useState("");

    /** Update local state w/curr state of input elem */

    const handleChange = evt => {
        setTask(evt.target.value);
    };

    /** Send {todo} to parent & clear form*/

    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo({ task, id: uuid() });
        setTask("");
    };



    /** render form */
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task:</label>
                <input
                    id="task"
                    name="task"
                    type="text"
                    onChange={handleChange}
                    value={task}
                />
                <button>Add a todo!</button>
            </form>
        </div>
    );
};


export default NewTodoForm;