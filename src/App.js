"use strict"

function getDemoTaskList() {
    let demoTL = new TaskList("Pendenzenliste: Picknick");
    demoTL.tasks.push(new Task("Bier kaufen", true));
    demoTL.tasks.push(new Task("Würste kaufen", false));
    demoTL.tasks.push(new Task("Ort finden", true));
    demoTL.tasks.push(new Task("Wetter abklären", false));

    return demoTL;
}


function updateView() {
    let listView = generateTaskListView(taskList);

    let body = $("body");

    body.empty();
    body.append(listView);
}

function createNewTodo(){
    taskList.tasks.push(new Task("New Task"))
    updateView();
}

function editWithInput(t) {
    return e => {
        let c = $(e.currentTarget);
        let replacementInput = $("<input>", {type: "text", value: c.text(), blur: e => {
            t.title = $(e.currentTarget).val()
            updateView()
        }})
        c.replaceWith(replacementInput)
        replacementInput.focus().select()
    }
}

function generateTaskListView(tl) {
    let heading = $("<heading>", {
        html :
        $("<h1>", {
            text : tl.title,
            click : editWithInput(tl)
        })
    })

    let tasksLi = tl.tasks.map(generateTaskView);

    let newTodoButton = $("<button>", {id: "new-button", text: "New todo", click: createNewTodo, "class": "btn btn-default col-md-6" });
    let saveTodoButton = $("<button>", {id: "save-button", text: "Save Todos", "class": "btn btn-default col-md-6" });
    let buttonRow = $("<div>", {"class": "row", html: [ newTodoButton, saveTodoButton ]});

    let container = $("<div>", {
        id : "tasklist",
        "class": "container",
        html : [ heading ].concat(tasksLi).concat([buttonRow])
    });

    return container;
}

function generateTaskView(t){
    return $("<div>", {
        "class": "list-entry row",
        html : [
            $("<input>", {
                "class": "col-md-1",
                type: "checkbox",
                checked: t.done,
                change: e => {
                    let c = $(e.currentTarget);
                    t.done = c.prop("checked")
                    updateView();
                }
            }),
            $("<span>", {
                "class": "col-md-11",
                text: t.title,
                click: editWithInput(t)
            })
        ]
    });
}
