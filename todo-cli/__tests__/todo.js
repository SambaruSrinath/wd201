/* eslint-disable no-undef */
test('should create a new todo item', () => {
    const newTodo = 'Buy groceries';
    const todos = [];
    const updatedTodos = addTodo(todos, newTodo);
    expect(updatedTodos.length).toBe(1);
    expect(updatedTodos[0]).toBe(newTodo);
});
test('should mark a todo as completed', () => {
    const existingTodo = 'Finish report';
    const todos = [existingTodo];
    const updatedTodos = markAsCompleted(todos, existingTodo);
    expect(updatedTodos[0]).toHaveProperty('isCompleted', true);
});
test('should retrieve overdue items', () => {
    const pastDate = new Date(2023, 11, 10); // yesterday
    const todo1 = 'Clean room';
    const todo2 = 'Do laundry';
    const todos = [
        { description: todo1, dueDate: pastDate },
        { description: todo2, dueDate: pastDate },
    ];
    const overdueTodos = getOverdueItems(todos);
    expect(overdueTodos).toEqual([
        { description: todo1, dueDate: pastDate },
        { description: todo2, dueDate: pastDate },
    ]);
});
test('should retrieve due today items', () => {
    const today = new Date(2023, 11, 11); // today
    const todo1 = 'Pay bills';
    const todo2 = 'Call dentist';
    const todos = [
        { description: todo1, dueDate: today },
        { description: todo2, dueDate: today },
    ];
    const dueTodayTodos = getDueTodayItems(todos);
    expect(dueTodayTodos).toEqual([
        { description: todo1, dueDate: today },
        { description: todo2, dueDate: today },
    ]);
});
test('should retrieve due later items', () => {
    const futureDate = new Date(2023, 11, 12); // tomorrow
    const todo1 = 'Go shopping';
    const todo2 = 'Meet friends';
    const todos = [
        { description: todo1, dueDate: futureDate },
        { description: todo2, dueDate: futureDate },
    ];
    const dueLaterTodos = getDueLaterItems(todos);
    expect(dueLaterTodos).toEqual([
        { description: todo1, dueDate: futureDate },
        { description: todo2, dueDate: futureDate },
    ]);
});


test('should create a displayable list of todos', () => {
    const todo1 = { description: 'Clean room', isCompleted: false };
    const todo2 = { description: 'Do laundry', isCompleted: true };
    const todos = [todo1, todo2];
    const displayableList = toDisplayableList(todos);
    expect(displayableList).toEqual([
        '[ ] Clean room',
        '[X] Do laundry',
    ]);
});