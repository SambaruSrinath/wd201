// todo.js

const today = new Date().toISOString().substring(0, 10);

const todoList = () => {
    const all = [];

    const add = (todoItem) => {
        all.push(todoItem);
    };

    const markAsComplete = (index) => {
        if (index >= 0 && index < all.length) {
            all[index].completed = true;
        }
    };

    const overdue = () => {
        const overdueTasks = all.filter((item) => new Date(item.dueDate) < new Date(today));
        return overdueTasks;
    };

    const dueToday = () => {
        return all.filter((item) => item.dueDate === today);
    };

    const dueLater = () => {
        return all.filter((item) => item.dueDate > today);
    };

    const toDisplayableList = () => {
        const dsl = all.map((element) => {
            const status = element.completed ? "[x]" : "[ ]";
            return `${status} ${element.title} ${element.dueDate}`;
        });
        return dsl.join('\n');
    };

    return {
        all,
        add,
        markAsComplete,
        overdue,
        dueToday,
        dueLater,
        toDisplayableList,
    };
};

module.exports = todoList;
