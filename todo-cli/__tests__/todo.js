/* eslint-disable no-undef */
// todo.test.js

const todoList = require('../todo.js');  // Adjust the path accordingly

describe('Todo List', () => {
    let list;
    let today;

    beforeEach(() => {
        list = todoList();
        today = new Date().toISOString().substring(0, 10);
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

    test('Marking a non-existent todo as completed does not throw an error', () => {
        expect(() => list.markAsComplete(0)).not.toThrow();
    });

    test('Retrieval of overdue items', () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        list.add({ title: 'Overdue Todo', dueDate: yesterday.toISOString().substring(0, 10) });
        expect(list.overdue().length).toBe(1);
    });

    test('Retrieval of due today items', () => {
        list.add({ title: 'Due Today Todo', dueDate: today });
        expect(list.dueToday().length).toBe(1);
    });

    test('Retrieval of due later items', () => {
        list.add({ title: 'Due Later Todo', dueDate: '2023-12-31' });
        expect(list.dueLater().length).toBe(1);
    });

    test('toDisplayableList function is implemented', () => {
        expect(typeof list.toDisplayableList).toBe('function');
    });

    test('toDisplayableList returns the correct formatted string', () => {
        list.add({ title: 'Test Todo', dueDate: '2023-12-31' });
        const expectedOutput = '[ ] Test Todo 2023-12-31';
        expect(list.toDisplayableList()).toBe(expectedOutput);
    });
});
