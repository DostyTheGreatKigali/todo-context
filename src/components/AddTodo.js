import React, { useState, useContext } from 'react';
import '../App.css'
import { TodoContext } from '../context'



export const AddTodo = () => {
    const [text, setText] = useState('');
    
    const { addTodo } = useContext(TodoContext);

    const submitTodo = (event) => {
        event.preventDefault();
        
        const newTodo = {
            id: Math.floor(Math.random() * 100000000),
            text: text
        }
        console.log(newTodo)
        addTodo(newTodo);
    }

    return (
        <header>
        <form id="toDoForm" 
        onSubmit={submitTodo}
        >
        <input 
        type="text" 
        placeholder="Enter to do" 
        value={text}
        onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Add </button>

        </form>
    </header> 
    )
}