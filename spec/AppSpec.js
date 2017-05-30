"use strict"
let taskList = getDemoTaskList()
let view = generateTaskListView(taskList)
describe("App", () => {
    it("has a heading", () => {
        expect($(view).find("heading").length).toBeGreaterThan(
            0)
        expect($(view).find("heading h1").length).toBeGreaterThan(
            0)
    })
    it("has containers with two buttons", () => {
        expect($(view).find("div > button#new-button").length).toBeGreaterThan(
            0)
        expect($(view).find("div > button#save-button").length)
            .toBeGreaterThan(0)
    })
    it("has a new task button with an event registered", () => {
        expect($._data($(view).find("div > button#new-button").get(
            0), 'events').click).toBeDefined()
    })
    it("has a list of tasks with click events", () => {
        expect($(view).find("div.list-entry").length).toBeGreaterThan(
            0)
    })
})
