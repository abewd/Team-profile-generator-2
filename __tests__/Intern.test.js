// Adding constructor
const Intern = require("../lib/Intern");
// Testing criteria
describe("Constructor", () => {
  it("Constructor checking Intern", () => {
    let e = new Intern();
    expect(typeof e).toBe("object");
  });
});

// Test to see if the constructor and input value are the same
test('getRole() should return "Intern"', () => {
  const expValue = "Intern";
  const e = new Intern(1, "MyName", "MyName@email.com", "schoolName");
  expect(e.getRole()).toBe(expValue);
});
