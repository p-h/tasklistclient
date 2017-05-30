"use strict"

function getDemoTaskList() {
    let demoTL = new TaskList("Pendenzenliste: Picknick")
    demoTL.tasks.push(new Task("Bier kaufen", true))
    demoTL.tasks.push(new Task("Würste kaufen", false))
    demoTL.tasks.push(new Task("Ort finden", true))
    demoTL.tasks.push(new Task("Wetter abklären", false))
    return demoTL
}
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
    it("persists to remote and updates view on data change", () => {
        let dummyBody = jasmine.createSpyObj(["empty", "append"])

        spyOn(window, "$").and.returnValue(dummyBody)
        spyOn($, "post")

        listUpdated()
        expect($.post).toHaveBeenCalledTimes(1)
        expect(dummyBody.empty).toHaveBeenCalledTimes(1)
        expect(dummyBody.append).toHaveBeenCalledTimes(1)
    })
})
