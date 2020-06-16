import React, { useContext } from 'react';
import './todo-list.css'
import { TodoContext } from '../context'

export const TodoList = () => {
    const { todoList, removeTodo, editTodo } = useContext(TodoContext);
    // const listToDos = todoList.map((todo, index) => {
    const listToDos = todoList.map(todo => {
        return <div className="todoList" key={ todo.id } >
        <p>
            {/* { todo.text } */}
            <input
            id={todo.id}
            value={todo.text}
            onChange={(event) => {
                editTodo(event.target.value, todo.id)
            }}
            />
        <span>
            <button 
            onClick={() => removeTodo(todo.id)}
            >
            Remove
            </button>
        </span>
        </p>
        
        </div>
        });
        return (
                <div>{listToDos}</div>
            );
}