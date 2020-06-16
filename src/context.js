import React, { createContext, useReducer} from 'react'
import TodoReducer from './TodoReducer'

const initialState = {
    todoList: [],
    // currentTodo: {
    //     text: '',
    //     key: '' 
    // }
};

// Create context
export const TodoContext = createContext(initialState);
 
// Provider Component
export const TodoProvider = ({ children }) => {
const [ state, dispatch ] = useReducer(TodoReducer, initialState);

// Actions
function addTodo(todo){
    console.log('Added from global state')
    dispatch({
        type: 'ADD_TODO',
        payload: todo
    })
}

function removeTodo(id){
    console.log('Deleted from global state')
    dispatch({
        type: 'DELETE_TODO',
        payload: id
    })
}
function editTodo(text, id){
    console.log('Edited from global state')
    dispatch({
        type: 'EDIT_TODO',
        id: id,
        payload: text
    })
}

return (
<TodoContext.Provider value={{ 
    todoList: state.todoList,
    removeTodo: removeTodo,
    addTodo: addTodo,
    editTodo: editTodo
}}
>
    { children }
</TodoContext.Provider>)
}