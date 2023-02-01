// We are creating an Engineer constructor which will contain various data
// The main constructor is still Manager with Engineer being a super
let Employee = require("./Employee");
class Manager extends Employee {
  // Added office number to the list of variables in this constructor
  constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  // Function to call Manager method
  getRole() {
    return "Manager";
  }
}

// Exports function
module.exports = Manager;
