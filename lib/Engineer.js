// Engineer class
const Employee = require('./Employee');

//Extend employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //Super in this case in employee
        super (name, id, email)
        this.github = github;
    }
    // Add github function for engineers only
    getGithub() {
        return this.github;
    }
    // Update the role to Engineer
    getRole() {
        return "Engineer";
    }
}

// Export
module.exports = Engineer;