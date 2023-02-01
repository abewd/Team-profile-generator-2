const Engineer = require("../lib/Engineer");

describe("Constructor", () => {
  it("Constructor checking Engineer", () => {
    let e = new Engineer();
    expect(typeof e).toBe("object");
  });
});

test('getRole() should return "Engineer"', () => {
  const expValue = "Engineer";
  const e = new Engineer(1, "MyName", "MyName@email.com", "github");
  expect(e.getRole()).toBe(expValue);
});
