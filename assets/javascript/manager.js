

// imports the Worker Class: 
const Worker = require('./employee');

class Manager extends Worker {
    // addes Office Number to the constructor 
    constructor(idNum, email, name, officeNum) {
        super(idNum, email, name);
        this.officeNum = officeNum;
    }

    returnTitle() {
        return 'Manager';
    }

    returnOfficeNum() {
        return this.officeNum;
    }
};

module.exports = Manager;