/* eslint-disable no-undef */
const todos = [];

// Function to add new todo item
function addTodo(description, dueDate = null) {
    todos.push({
        id: Date.now(), // Unique identifier
        description,
        completed: false,
        dueDate,
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
    return todos.filter((todo) => todo.dueDate && todo.dueDate < today && !todo.completed);
}

// Function to retrieve due today items
function getDueTodayItems() {
    const today = new Date();
    return todos.filter((todo) => {
        if (todo.dueDate && isSameDate(todo.dueDate, today) && !todo.completed) {
            return true;
        }
        return false;
    });
}

// Function to retrieve due later items
function getDueLaterItems() {
    const today = new Date();
    return todos.filter((todo) => todo.dueDate && todo.dueDate > today && !todo.completed);
}

// Helper function to check if two dates are on the same day
function isSameDate(date1, date2) {
    return date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear();
}

// Function to convert internal data to a displayable list
function toDisplayableList() {
    let output = "";
    for (const todo of todos) {
        const status = todo.completed ? "[X]" : "[ ]";
        output += `${status} ${todo.description}`;
        if (todo.dueDate) {
            output += ` - Due: ${todo.dueDate.toLocaleDateString()}`;
        }
        output += "\n";
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
test("should add a new todo item", () => {
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
test("should mark a todo as completed", () => {
    addTodo("Do laundry");
    const todoId = todos[0].id;
    markAsCompleted(todoId);
    expect(todos[0].completed).toBeTruthy();
});
test("should retrieve overdue items", () => {
    const pastDate = new Date("2023-12-10");
    addTodo("Clean the house", pastDate);
    const overdueItems = getOverdueItems();
    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0].description).toBe("Clean the house");
});
test("should retrieve due today items", () => {
    const today = new Date();
    addTodo("Study for exam", today);
    const dueTodayItems = getDueTodayItems();
    expect(dueTodayItems.length).toBe(1);
    expect(dueTodayItems[0].description).toBe("Study for exam");
});
test("should retrieve due later items", () => {
    // ... test setup ...

    const dueLaterItems = getDueLaterItems();

    // Update expected count based on actual future items
    expect(dueLaterItems.length).toBe(2);

    // ... further test assertions ...
});
test("should display todos in a list format", () => {
    // ... test setup ...

    const displayableList = toDisplayableList();

    // Add assertions to check if the displayableList is in the expected format
    // For example, you can check if it contains "[X]" or "[ ]" for completed or incomplete tasks
    expect(displayableList).toContain("[X]"); // Assuming a completed task is displayed with "[X]"
    expect(displayableList).toContain("[ ]"); // Assuming an incomplete task is displayed with "[ ]"
});

test("should not mark a completed todo as overdue or due today", () => {
    // ... test setup ...

    markAsCompleted(todos[0].id);

    const overdueItems = getOverdueItems();
    const dueTodayItems = getDueTodayItems();

    // Add assertions to check if completed todos are not mistakenly marked as overdue or due today
    expect(overdueItems.length).toBe(0);
    expect(dueTodayItems.length).toBe(0);
});
