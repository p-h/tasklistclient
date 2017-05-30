"use strict"
const REMOTE_BASE = "http://zhaw.herokuapp.com/task_lists/";
let taskList = new TaskList("Pendenzenliste: ")
$(() => {
    let id = location.hash.substring(location.hash.indexOf('#') + 1)
    if (id) {
        $.getJSON(REMOTE_BASE + id, (data) => {
            taskList = new TaskList(data)
            updateView()
        })
    } else {
        updateView()
    }
})
