class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // getter for employee name
    getName() {
        return this.name;
    }

    // getter for employee ID
    getId() {
        return this.id;
    }

    // getter for employee email
    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;