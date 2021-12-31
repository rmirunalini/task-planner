const fs = require('fs');

// Add a todo item 
var addTodo = (title) => {
    var todos = fetchTodos();
    var todo = {
        title
    };
  
    var duplicatetodos = todos.filter(
        (todo) => todo.title === title);
  
    if (duplicatetodos.length === 0) {
        todos.push(todo);
        saveTodos(todos);
        return todo;
    }
};
  
// Delete a todo item 
var deleteTodo = (title) => {
    var todos = fetchTodos();
    var filteredtodos = todos.filter(
        (todo) => todo.title !== title);
    saveTodos(filteredtodos);
  
    return todos.length !== filteredtodos.length;
};
  
// List all todo items 
var listTodos = () => {
    return fetchTodos();
};
  
  
// Utility functions
var fetchTodos = () => {
    try {
        var todosString = 
            fs.readFileSync('tasks-data.json');
        return JSON.parse(todosString);
    } catch (e) {
        return [];
    }
};
  
var saveTodos = (todos) => {
    fs.writeFileSync('tasks-data.json', 
        JSON.stringify(todos));
};
  
var logTodo = (todo) => {
    console.log(`Title_of_todo: ${todo.title}`);
};
  
// Exporting function
module.exports = {
    addTodo,
    deleteTodo,
    listTodos,
    logTodo
};
