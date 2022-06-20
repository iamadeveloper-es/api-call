import Todo from "./src/services/todo.js"


function getTodos(path){
    const filters = {
        id: '3' 
    }
    return Todo.getTodos(path, filters)
}

getTodos('https://jsonplaceholder.typicode.com/todos')