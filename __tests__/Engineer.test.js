// Adding constructor
const Engineer = require("../lib/Engineer");

// Testing criteria
describe("Constructor", () => {
  it("Constructor checking Engineer", () => {
    let e = new Engineer();
    expect(typeof e).toBe("object");
  });
});

// Test to see if the constructor and input value are the same
test('getRole() should return "Engineer"', () => {
  const expValue = "Engineer";
  const e = new Engineer(1, "MyName", "MyName@email.com", "github");
  expect(e.getRole()).toBe(expValue);
});
