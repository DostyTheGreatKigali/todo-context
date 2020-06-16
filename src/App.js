import React from 'react';
import { TodoList } from './components/TodoList'
import { AddTodo } from './components/AddTodo'
import './App.css';
import { TodoProvider } from './context'

function App(){
    return (
        <TodoProvider>
        <div className="App">
       <AddTodo />
        <TodoList/>
        </div>
        </TodoProvider>
    )
}

export default App;
