/* eslint-disable no-undef */
// todoList.test.js
const createTodoList = require('./todoList');

test('Test to add a todo', () => {
    const todoList = createTodoList();
    todoList.add({ title: 'Buy groceries', dueDate: '2023-12-15', completed: false });

    expect(todoList.all.length).toBe(1);
    expect(todoList.all[0]).toEqual({ title: 'Buy groceries', dueDate: '2023-12-15', completed: false });
});

test('Test to mark a todo as complete', () => {
    const todoList = createTodoList();
    todoList.add({ title: 'Buy groceries', dueDate: '2023-12-15', completed: false });
    todoList.markAsComplete(0);

    expect(todoList.all[0].completed).toBe(true);
});

test('Test to retrieve overdue items', () => {
    const todoList = createTodoList();
    todoList.add({ title: 'Buy groceries', dueDate: '2023-01-01', completed: false });

    const overdueItems = todoList.overdue();
    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0].title).toBe('Buy groceries');
});

test('Test to retrieve due today items', () => {
    const todoList = createTodoList();
    todoList.add({ title: 'Buy groceries', dueDate: '2023-12-11', completed: false });

    const dueTodayItems = todoList.dueToday();
    expect(dueTodayItems.length).toBe(1);
    expect(dueTodayItems[0].title).toBe('Buy groceries');
});

test('Test to retrieve due later items', () => {
    const todoList = createTodoList();
    todoList.add({ title: 'Buy groceries', dueDate: '2023-12-15', completed: false });

    const dueLaterItems = todoList.dueLater();
    expect(dueLaterItems.length).toBe(1);
    expect(dueLaterItems[0].title).toBe('Buy groceries');
});
