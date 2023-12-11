/* eslint-disable no-undef */
// todoList.test.js
const createTodoList = require('./todoList');

test('should add a new todo item', () => {
    const todoList = createTodoList();
    todoList.add({ title: 'Buy groceries', dueDate: '2023-12-15', completed: false });

    expect(todoList.all.length).toBe(1);
    expect(todoList.all[0]).toEqual({ title: 'Buy groceries', dueDate: '2023-12-15', completed: false });
});

test('should mark a todo as completed', () => {
    const todoList = createTodoList();
    todoList.add({ title: 'Buy groceries', dueDate: '2023-12-15', completed: false });
    todoList.markAsComplete(0);

    expect(todoList.all[0].completed).toBe(true);
});

test('should retrieve overdue items', () => {
    const todoList = createTodoList();
    todoList.add({ title: 'Buy groceries', dueDate: '2023-01-01', completed: false });

    const overdueItems = todoList.overdue();
    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0].title).toBe('Buy groceries');
});

test('should retrieve due today items', () => {
    const todoList = createTodoList();
    todoList.add({ title: 'Buy groceries', dueDate: '2023-12-11', completed: false });

    const dueTodayItems = todoList.dueToday();
    expect(dueTodayItems.length).toBe(1);
    expect(dueTodayItems[0].title).toBe('Buy groceries');
});

test('should retrieve due later items', () => {
    const todoList = createTodoList();
    todoList.add({ title: 'Buy groceries', dueDate: '2023-12-15', completed: false });

    const dueLaterItems = todoList.dueLater();
    expect(dueLaterItems.length).toBe(1);
    expect(dueLaterItems[0].title).toBe('Buy groceries');
});

test('should display todos in a list format', () => {
    const todoList = createTodoList();
    todoList.add({ title: 'Buy groceries', dueDate: '2023-12-15', completed: false });
    todoList.add({ title: 'Read a book', dueDate: '2023-12-16', completed: true });

    const displayableList = todoList.toDisplayableList(todoList.all);

    expect(displayableList).toContain('[ ] Buy groceries - Due: 12/15/2023');
    expect(displayableList).toContain('[x] Read a book - Due: 12/16/2023');
});
