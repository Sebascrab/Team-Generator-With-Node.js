

// Worker class that each classes will inherit from ie: engineer/manager/intern

class Worker {
    // returns the ID Number, Email, Name, and also title of the worker. 
    constructor(idNum, email, name) {
        this.idNum = idNum;
        this.name = name;
        this.email = email;

    }

    getTitle() {
        return "Worker";
    }

    returnidNum() {
        return this.idNum;
    }

    returnEmail() {
        return this.email;
    }

    returnName() {
        return this.name;
    }

};

// exports Worker class to be used in manager, intern, and engineer js files. 
module.exports = Worker;