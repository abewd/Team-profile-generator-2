// We are creating an Employee constructor which will contain various data
class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  // Function to call Employee methods
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// Exports function
module.exports = Employee;
