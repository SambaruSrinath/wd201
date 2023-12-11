/* eslint-disable no-undef */
const today = new Date().toISOString().substring(0, 10);
const todoList = () => {
    all = []

    const add = (todoItem) => {
        all.push(todoItem)
    }

    const markAsComplete = (index) => {
        all[index].completed = true
    }

    const overdue = () => {
        const today = new Date().toLocaleDateString("en-CA");
        console.log("Today:", today);
        console.log("All tasks:", all);

        const overdueTasks = all.filter((item) => {
            console.log("Task dueDate:", item.dueDate);
            return true;  // Always include the task for now
        });

        console.log("Overdue tasks:", overdueTasks);
        return overdueTasks;
    };



    const dueToday = () => {
        return all.filter(
            (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
        );
    }

    const dueLater = () => {
        return all.filter(
            (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
        );
    }

    const toDisplayableList = (list) => {
        const dsl = [];
        list.forEach((element) => {
            if (element.dueDate === today) {
                if (element.completed === true) {
                    const a = "[x] " + element.title;
                    dsl.push(a);
                } else {
                    const a = "[ ] " + element.title;
                    dsl.push(a);
                }
            } else {
                if (element.completed === true) {
                    const a = "[x] " + element.title + " " + element.dueDate;
                    dsl.push(a);
                } else {
                    const a = "[ ] " + element.title + " " + element.dueDate;
                    dsl.push(a);
                }
            }
        });
        let g = "";
        for (let i = 0; i < dsl.length; i++) {
            // eslint-disable-next-line no-undef
            obj = dsl[i];
            if (i === 0) {
                // eslint-disable-next-line no-undef
                g = g + obj;
            } else {
                // eslint-disable-next-line no-undef
                g = g + "\n" + obj;
            }
        }
        return g;
    }

    return {
        all,
        add,
        markAsComplete,
        overdue,
        dueToday,
        dueLater,
        toDisplayableList
    };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;
