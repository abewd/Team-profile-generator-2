// We are creating an Engineer constructor which will contain various data
// The main constructor is still Employee with Engineer being a super
let Employee = require("./Employee");
class Engineer extends Employee {
  // Added GitHub to the list of variables in this constructor
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }
  // Function to call Employee methods
  getGithub() {
    return this.github;
  }
  // Function to call Engineer method
  getRole() {
    return "Engineer";
  }
}

// Exports function
module.exports = Engineer;
