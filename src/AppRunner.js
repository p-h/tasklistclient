"use strict"

let taskList = new TaskList("Pendenzenliste: ");

$(() => {
    $("body").keypress(e => {
        if(e.which == 252) {
            taskList = getDemoTaskList();
            updateView();
        }
    })

    updateView();
});
