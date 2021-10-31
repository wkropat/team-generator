//Employee class

class Employee {
    // Name, id, and email are required for all employees
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // User input name
    getName() {
        return this.name;
    }
    // User input id
    getId() {
        return this.id;
    }
    // User input email
    getEmail() {
        return this.email;
    }
    // Employee role
    getRole() {
        return "Employee";
    }

}

// Export
module.exports = Employee;