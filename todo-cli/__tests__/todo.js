/* eslint-disable no-undef */
const todoList = require('../todo');

describe('Todo List', () => {
    let list;

    beforeEach(() => {
        list = todoList();
    });

    test('Creating a new todo', () => {
        list.add({ title: 'Test Todo', dueDate: '2023-12-31' });
        expect(list.all.length).toBe(1);
    });

    test('Marking a todo as completed', () => {
        list.add({ title: 'Test Todo', dueDate: '2023-12-31' });
        list.markAsComplete(0);
        expect(list.all[0].completed).toBe(true);
    });

    test('Retrieval of overdue items', () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1); // Set the due date to yesterday
        list.add({ title: 'Overdue Todo', dueDate: yesterday.toLocaleDateString('en-CA') });
        expect(list.overdue().length).toBe(1);
    });

    test('Retrieval of due today items', () => {
        list.add({ title: 'Due Today Todo', dueDate: new Date().toLocaleDateString('en-CA') });
        expect(list.dueToday().length).toBe(1);
    });

    test('Retrieval of due later items', () => {
        list.add({ title: 'Due Later Todo', dueDate: '2023-12-31' });
        expect(list.dueLater().length).toBe(1);
    });

    test('toDisplayableList function is implemented', () => {
        expect(typeof list.toDisplayableList).toBe('function');
    });

    // Additional tests for further functionalities



});
