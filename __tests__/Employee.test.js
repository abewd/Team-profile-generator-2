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

//   it("Correct guess makes character visible", () => {
//     const Employee = new Employee("j");
//     const { visible } = Employee;

//     // Correct guess
//     Employee.guess("j");

//     // Employee was not originally visible
//     expect(visible).toBe(false);

//     // Employee is now visible
//     expect(Employee.visible).toBe(true);
//   });

//   it("Incorrect guess does not make character visible", () => {
//     const Employee = new Employee("j");
//     const { visible } = Employee;

//     // Incorrect guess
//     Employee.guess("l");

//     // Employee was not originally visible
//     expect(visible).toBe(false);

//     // Employee is still not visible
//     expect(Employee.visible).toBe(false);
//   });

//   it("Should return the guessed character when using toString", () => {
//     const Employee = new Employee("j");

//     Employee.guess("j");

//     expect(Employee.toString()).toBe("j");
//   });
// });

// describe("Employee class", () => {
//   it("Characters that aren't digits or Employees are instantly visible", () => {
//     expect(new Employee("?").visible).toBe(true);
//   });

//   it("toString returns _ for Employees", () => {
//     expect(new Employee("a").toString()).toBe("_");
//   });

//   describe("guess", () => {
//     it("Correct guess returns true", () => {
//       expect(new Employee("j").guess("j")).toBe(true);
//     });

//     it("Incorrect guess returns false", () => {
//       expect(new Employee("j").guess("l")).toBe(false);
//     });
//   });

//   describe("getSolution", () => {
//     it("returns character", () => {
//       expect(new Employee("l").getSolution()).toBe("l");
//     });
//   });
// });
