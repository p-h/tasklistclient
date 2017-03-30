"use strict"

describe("Task", () => {
    const taskTitle = "My Task Title"
    let myTask = new Task(taskTitle)

    it("has a title", () => {
        expect(myTask.title).toEqual(taskTitle)
    })

    it("is not done when new", () => {
        expect(myTask.done).toBe(false)
    })
})
