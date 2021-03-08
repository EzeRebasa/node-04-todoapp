const { v4: uuidv4 } = require('uuid');

class Task {
    id = '';
    title = '';
    isDone = false;
    created = null;
    finished = null;

    constructor(title) {
        this.id = uuidv4(); //TODO: asignar id
        this.title = title;
        this.isDone = false;
        this.created = new Date();
    }
}

module.exports = Task;