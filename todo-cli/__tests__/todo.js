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
