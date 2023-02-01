// We are creating an Engineer constructor which will contain various data
// The main constructor is still Intern with Engineer being a super
let Employee = require("./Employee");
class Intern extends Employee {
  // Added school to the list of variables in this constructor
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
  }
  // Function to call Employee methods
  getSchool() {
    return this.school;
  }
  getRole() {
    // Function to call intern method
    return "Intern";
  }
}

// Exports function
module.exports = Intern;
