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

/* eslint-disable no-undef */
it("should add a new todo item", () => {
    const initialLength = todos.length;
    addTodo("Buy milk");
    expect(todos.length).toBeGreaterThan(initialLength);
    expect(todos[todos.length - 1]).toEqual({
        id: expect.any(Number),
        description: "Buy milk",
        completed: false,
        dueDate: null,
    });
});
it("should mark a todo as completed", () => {
    addTodo("Do laundry");
    const todoId = todos[0].id;
    markAsCompleted(todoId);
    expect(todos[0].completed).toBeTruthy();
});
it("should retrieve overdue items", () => {
    const pastDate = new Date("2023-12-10");
    addTodo("Clean the house", pastDate);
    const overdueItems = getOverdueItems();
    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0].description).toBe("Clean the house");
});
it("should retrieve due today items", () => {
    const today = new Date();
    addTodo("Study for exam", today);
    const dueTodayItems = getDueTodayItems();
    expect(dueTodayItems.length).toBe(1);
    expect(dueTodayItems[0].description).toBe("Study for exam");
});
it("should retrieve due later items", () => {
    const futureDate = new Date("2023-12-15");
    addTodo("Finish project", futureDate);
    const dueLaterItems = getDueLaterItems();
    expect(dueLaterItems.length).toBe(1);
    expect(dueLaterItems[0].description).toBe("Finish project");
});
