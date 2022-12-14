

// requires worker parent class
const Worker = require('./employee');

class Intern extends Worker {
    // addes School Name to the constructor
    constructor(idNum, email, name, school) {
        super(idNum, email, name);
        this.school = school;
    }

    returnTitle() {
        return 'Intern';
    }

    returnSchoolName() {
        return this.school;
    }
};

module.exports = Intern;