const todos = [];

// Function to add new todo item
function addTodo(description) {
    todos.push({
        id: Date.now(), // Unique identifier
        description,
        completed: false,
        dueDate: null, // Optional due date
    });
}

// Function to mark a todo as completed
function markAsCompleted(id) {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.completed = true;
    }
}

// Function to retrieve overdue items
function getOverdueItems() {
    const today = new Date();
    return todos.filter((todo) => {
        if (todo.dueDate && todo.dueDate < today && !todo.completed) {
            return true;
        }
        return false;
    });
}

// Function to retrieve due today items
function getDueTodayItems() {
    const today = new Date();
    return todos.filter((todo) => {
        if (
            todo.dueDate &&
            today.toDateString() === new Date(todo.dueDate).toDateString() &&
            !todo.completed
        ) {
            return true;
        }
        return false;
    });
}

// Function to retrieve due later items
function getDueLaterItems() {
    const today = new Date();
    return todos.filter((todo) => {
        if (todo.dueDate && todo.dueDate > today && !todo.completed) {
            return true;
        }
        return false;
    });
}

// Function to convert internal data to a displayable list
function toDisplayableList() {
    let output = "";
    for (const todo of todos) {
        const status = todo.completed ? "[X]" : "[ ]";
        output += `${status} ${todo.description}\n`;
    }
    return output;
}

// Example usage
addTodo("Buy groceries");
addTodo("Finish homework", new Date("2023-12-12"));
addTodo("Clean the room", new Date("2023-12-14"));

markAsCompleted(todos[0].id);

console.log(toDisplayableList());
