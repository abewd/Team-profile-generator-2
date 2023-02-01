const Employee = require("../lib/Employee");

describe("Constructor", () => {
  it("Constructor checking employee", () => {
    let e = new Employee();
    expect(typeof e).toBe("object");
  });
});

test('getRole() should return "Employee"', () => {
  const expValue = "Employee";
  const e = new Employee(1, "MyName", "MyName@email.com");
  expect(e.getRole()).toBe(expValue);
});
