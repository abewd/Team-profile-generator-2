const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

// Constructor classes and questions for each employee type
const { Manager, managerQuestions } = require("./lib/Manager");
const { Engineer, engineerQuestions } = require("./lib/Engineer");
const { Intern, internQuestions } = require("./lib/Intern");
// const { Employee, employeeQuestions } = require("./lib/Employee");

// Store all team members under an array
const employeesArray = [];

const init = () => {
  managerQuestions();
};
const managerQuestions = () => {
  inquirer.prompt(managerQuestionsArr).then((answers) => {
    answers = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employeesArr.push(answers);
    return employeePrompt();
  });
};
