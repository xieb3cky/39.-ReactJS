import React, { useState } from 'react';
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

function TodoList() {

    const [todos, setToDos] = useState([]);

    //**Add new todo to the list */
    const addTodo = newTodo => {
        setToDos(todos => [...todos, newTodo]);
    };

    const removeTodo = id => {
        setToDos(todos => todos.filter(todo => todo.id !== id));
    };


    const renderTodos = todos.map(toDo => (

        < Todo
            remove={removeTodo}
            key={toDo.id}
            id={toDo.id}
            task={toDo.task}
        />

    ));


    return (
        <div>
            <h1>To Do List</h1>
            <NewTodoForm addTodo={addTodo} />
            <ul>{renderTodos}</ul>
        </div>
    );
}



export default TodoList;

