const Intern = require("../lib/Intern");

describe("Constructor", () => {
  it("Constructor checking Intern", () => {
    let e = new Intern();
    expect(typeof e).toBe("object");
  });
});

test('getRole() should return "Intern"', () => {
  const expValue = "Intern";
  const e = new Intern(1, "MyName", "MyName@email.com", "schoolName");
  expect(e.getRole()).toBe(expValue);
});
