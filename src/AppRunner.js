"use strict"
let taskList = new TaskList("Pendenzenliste: ")

function loadTaskListFromHash() {
    let id = location.hash.substring(location.hash.indexOf('#') + 1)
    if (id) {
        $.getJSON(REMOTE_BASE + id, data => {
            taskList = new TaskList(data)
            updateView()
        })
    } else {
        updateView()
    }
}
$(() => {
    $(window).on("hashchange", loadTaskListFromHash)
    loadTaskListFromHash()
})
