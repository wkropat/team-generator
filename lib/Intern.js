//Intern class
const Employee = require('./Employee');

// Extends Employees class
class Intern extends Employee {
    constructor (name, id, email, school) {
        // Same as above
        super (name, id, email);
        this.school = school;
    }

    // Return school
    getSchool() {
        return this.school;
    }

    // Set role to intern
    getRole() {
        return "Intern";
    }
}

// Export
module.exports = Intern;