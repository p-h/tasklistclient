"use strict"
class Task {
    constructor(title, done) {
        if (typeof (title) === 'string') {
            this.title = title || ""
            this.done = done || false
        } else {
            let copy = title
            this.title = copy.title || ""
            this.done = copy.done || false
        }
    }
}
