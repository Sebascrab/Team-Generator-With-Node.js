

// requires parent class Worker
const Worker = require('./worker');

class Engineer extends Worker {
    // addes GitHub username to the constructor
    constructor(idNum, email, name, gitHub) {
        super(idNum, email, name);
        this.gitHub = gitHub;
    }

    returnTitle() {
        return 'Engineer';
    }

    returnGitHubUser() {
        return this.gitHub;
    }
};

module.exports = Engineer
;