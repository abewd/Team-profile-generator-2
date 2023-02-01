const Engineer = require("../lib/Engineer.js");

test("creates an engineer object", () => {
  const engineer = new Engineer(
    "Engineer TestName",
    "5678",
    "engineertest@email.com",
    "testGitHub"
  );

  expect(engineer.name).toBe("Engineer TestName");
  expect(engineer.id).toBe("5678");
  expect(engineer.email).toBe("engineertest@email.com");
  expect(engineer.gitHub).toBe("testGitHub");
});

test("returns engineer's github username", () => {
  const engineer = new Engineer(
    "Engineer TestName",
    "5678",
    "engineertest@email.com",
    "testGitHub"
  );

  expect(engineer.getGitHub()).toEqual(expect.stringContaining("testGitHub"));
});

test("returns engineer's role", () => {
  const engineer = new Engineer(
    "Engineer TestName",
    "5678",
    "engineertest@email.com",
    "testGitHub"
  );

  expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
});
