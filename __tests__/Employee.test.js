// Adding constructor
const Employee = require("../lib/Employee");

// Testing criteria
describe("Constructor", () => {
  it("Constructor checking employee", () => {
    let e = new Employee();
    expect(typeof e).toBe("object");
  });
});

// Test to see if the constructor and input value are the same
test('getRole() should return "Employee"', () => {
  const expValue = "Employee";
  const e = new Employee(1, "MyName", "MyName@email.com");
  expect(e.getRole()).toBe(expValue);
});
