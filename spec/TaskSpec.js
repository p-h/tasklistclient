"use strict"
describe("TaskList", () => {
    const taskListTitle = "My Task List Title"
    let myTaskList = new TaskList(taskListTitle)
    it("has a title", () => {
        expect(myTaskList.title).toEqual(taskListTitle)
    })
    it("is empty when new", () => {
        expect(myTaskList.tasks).toEqual([])
    })
})
