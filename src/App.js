"use strict"
const REMOTE_BASE = "http://zhaw.herokuapp.com/task_lists/"

function listUpdated() {
    updateView()
    updateRemote()
}

function updateView() {
    let listView = generateTaskListView(taskList)
    let body = $("body")
    body.empty()
    body.append(listView)
}

function updateRemote() {
    $.post(REMOTE_BASE + encodeURIComponent(taskList.id || ""), JSON.stringify(
        taskList), (data) => {
        let newTaskList = JSON.parse(data)
        taskList = new TaskList(newTaskList)
        updateView()
        location.hash = taskList.id ? "#" + taskList.id : ""
    })
}

function createNewTodo() {
    taskList.tasks.push(new Task("New Task"))
    listUpdated()
}

function editWithInput(t) {
    return e => {
        let c = $(e.currentTarget)
        let replacementInput = $("<input>", {
            type: "text",
            value: c.text(),
            blur: e => {
                t.title = $(e.currentTarget).val()
                listUpdated()
            }
        })
        c.replaceWith(replacementInput)
        replacementInput.focus().select()
    }
}

function generateTaskListView(tl) {
    let heading = $("<heading>", {
        html: $("<h1>", {
            text: tl.title,
            click: editWithInput(tl)
        })
    })
    let tasksLi = tl.tasks.map(generateTaskView)
    let newTodoButton = $("<button>", {
        id: "new-button",
        text: "New todo",
        click: createNewTodo,
        "class": "btn btn-default col-md-6"
    })
    let buttonRow = $("<div>", {
        "class": "row",
        html: newTodoButton
    })
    let container = $("<div>", {
        id: "tasklist",
        "class": "container",
        html: [heading].concat(tasksLi).concat([buttonRow])
    })
    return container
}

function generateTaskView(t) {
    return $("<div>", {
        "class": "list-entry row",
        html: [
            $("<input>", {
                "class": "col-md-1",
                type: "checkbox",
                checked: t.done,
                change: e => {
                    let c = $(e.currentTarget)
                    t.done = c.prop("checked")
                    listUpdated()
                }
            }),
            $("<span>", {
                "class": "col-md-11",
                text: t.title,
                click: editWithInput(t)
            })
        ]
    })
}
