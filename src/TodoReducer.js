export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TODO': {
            console.log("Deleted from reducer")
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload) 
            }
        }
        case 'ADD_TODO': {
            console.log("Added from reducer")
            return {
                ...state,
                todoList: [ ...state.todoList, action.payload ]
            }
        }
        case 'EDIT_TODO': {
            console.log("Edited from reducer")
            const editedTodos = [ ...state.todoList ];
            editedTodos.map(editedTodo => {
                if(editedTodo.id === action.id) {
                    editedTodo.text = action.payload;
                    console.log(editedTodo.text)
                    return editedTodo
                }
            })
            return {
                ...state,
                todoList: editedTodos
            }
        }
        default: 
           return state;
    }
}