// Manager class.
const Employee = require('./Employee');

// Extend employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // Add office number function
    getOfficeNumber() {
        return this.officeNumber;
    }
    // Replace Role
    getRole() {
        return "Manager"
    }
}

// Export
module.exports = Manager;
