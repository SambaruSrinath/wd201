const todoList = () => {
    const all = [];

    const add = (todoItem) => {
        all.push(todoItem);
    };

    const markAsComplete = (index) => {
        all[index].completed = true;
    };

    const overdue = () => {
        const today = new Date();
        return all.filter((item) => new Date(item.dueDate) < today);
    };

    const dueToday = () => {
        const today = new Date();
        return all.filter((item) => new Date(item.dueDate).toDateString() === today.toDateString());
    };

    const dueLater = () => {
        const today = new Date();
        return all.filter((item) => new Date(item.dueDate) > today);
    };

    const toDisplayableList = (list) => {
        return list.map((element) => {
            const status = element.completed ? "[x]" : "[ ]";
            return `${status} ${element.title} ${element.dueDate}`;
        }).join("\n");
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
