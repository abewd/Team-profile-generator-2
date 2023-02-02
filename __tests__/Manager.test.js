// Adding constructor
const Manager = require("../lib/Manager");

// Testing criteria
describe("Constructor", () => {
  it("Constructor checking Manager", () => {
    let e = new Manager();
    expect(typeof e).toBe("object");
  });
});

// Test to see if the constructor and input value are the same
test('getRole() should return "Manager"', () => {
  const expValue = "Manager";
  const e = new Manager(1, "MyName", "MyName@email.com", "officeNumber");
  expect(e.getRole()).toBe(expValue);
});
