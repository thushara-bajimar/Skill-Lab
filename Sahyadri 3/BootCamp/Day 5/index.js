// Import Express
const express = require('express');

// Create an Express application
const app = express();

// Port number where our server will run
const PORT = 3000;

// Middleware to read JSON data from request body
// Example: { "task": "Learn Node.js" }
app.use(express.json());


// Temporary Todo data
// We are using an array instead of a database
let todos = [
    {
        id: 1,
        task: "Learn Express.js",
        done: false
    },
    {
        id: 2,
        task: "Build a TO-DO app",
        done: false
    }
];


// ========================================
// GET ALL TODOS
// GET /todos
// ========================================

app.get('/todos', (req, res) => {

    // Send all todos as JSON response
    res.json(todos);
});


// ========================================
// GET SINGLE TODO
// GET /todos/:id
// Example: GET /todos/1
// ========================================

app.get('/todos/:id', (req, res) => {

    // Get id from URL
    // req.params.id will be a string
    // So we convert it into a number
    const id = parseInt(req.params.id);

    // Find the todo with the given id
    const todo = todos.find(t => t.id === id);

    // If todo exists, send it
    if (todo) {
        res.json(todo);
    }

    // If todo does not exist, send 404 error
    else {
        res.status(404).json({
            error: "Todo not found"
        });
    }
});


// ========================================
// CREATE NEW TODO
// POST /todos
// ========================================

app.post('/todos', (req, res) => {

    // Create a new todo
    const newTodo = {

        // Generate a new id
        id: todos.length + 1,

        // Get task from request body
        // Example: { "task": "Learn Node.js" }
        task: req.body.task,

        // New todo is incomplete by default
        done: false
    };

    // Add the new todo to the array
    todos.push(newTodo);

    // Send the newly created todo
    // 201 means "Created"
    res.status(201).json(newTodo);
});


// ========================================
// UPDATE TODO
// PUT /todos/:id
// Example: PUT /todos/1
// ========================================

app.put('/todos/:id', (req, res) => {

    // Get id from URL
    const id = parseInt(req.params.id);

    // Find the todo
    const todo = todos.find(t => t.id === id);

    // Check whether todo exists
    if (todo) {

        // Update task if a new task is provided
        // Otherwise keep the old task
        todo.task = req.body.task || todo.task;

        // Update done if provided
        // Otherwise keep the old value
        todo.done = req.body.done ?? todo.done;

        // Send updated todo
        res.json({
            message: "Todo updated",
            todo: todo
        });
    }

    // Todo not found
    else {
        res.status(404).json({
            error: "Todo not found"
        });
    }
});


// ========================================
// DELETE TODO
// DELETE /todos/:id
// Example: DELETE /todos/1
// ========================================

app.delete('/todos/:id', (req, res) => {

    // Get id from URL
    const id = parseInt(req.params.id);

    // Remove the todo with matching id
    todos = todos.filter(t => t.id !== id);

    // Send response
    res.json({
        message: "Todo deleted"
    });
});


// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {

    // This message is displayed when server starts
    console.log(`Server running at http://localhost:${PORT}`);
});