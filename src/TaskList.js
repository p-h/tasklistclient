"use strict"
class TaskList {
    constructor(title) {
        if (!typeof (title) === 'string') {
            this.id = null
            this.tasks = []
            this.title = title
        } else {
            let copy = title
            this.id = copy.id || null
            this.tasks = copy.tasks || []
            this.title = copy.title || ""
        }
    }
}
