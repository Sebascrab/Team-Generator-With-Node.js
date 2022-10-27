

// requires parent class Worker
const Worker = require('./worker');

class Engineer extends Worker {
    // addes GitHub username to the constructor
    constructor(idNum, email, name, github) {
        super(idNum, email, name);
        this.github = github;
    }

    returnTitle() {
        return 'Engineer';
    }

    returnGitHubUser() {
        return this.github;
    }
};

module.exports = Engineer
;