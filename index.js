const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const html = require("./dist/index");
// const myTeam = require("./dist/index.js")
// let newTeam = "data"
let allData = [];

let choiceQuestion = [
  {
    type: "list",
    message: "What is the employee role?",
    name: "role",
    choices: ["Engineer", "Intern", "Manager", "Employee", "none"],
  },
];
//General profile questions
let employeeQuestions = [
  {
    type: "input",
    message: "what is the employee's name?",
    name: "employeeName",
  },
  {
    type: "input",
    message: "what is the employee's id?",
    name: "id",
  },
  {
    type: "input",
    message: "what is the employee's email?",
    name: "email",
  },
];

//additional role questions

let managerQuestions = [
  {
    type: "input",
    message: "what is the managers office number?",
    name: "officeNumber",
  },
];
let engineerQuestions = [
  {
    type: "input",
    message: "what is the engineer github?",
    name: "github",
  },
];
let internQuestions = [
  {
    type: "input",
    message: "what is the intern's school?",
    name: "school",
  },
];
// Array of questions to select employees roles
function init() {
  inquirer.prompt([...choiceQuestion]).then((inputResponses) => {
    if (inputResponses.role == "Engineer") {
      askEngineerQuestions();
    } else if (inputResponses.role === "Intern") {
      askInternQuestions();
    } else if (inputResponses.role === "Manager") {
      askManagerQuestions();
    } else if (inputResponses.role == "Employee") {
      askEmployeeQuestions();
    } else if (inputResponses.role === "none") {
      generateHTML();
    }
  });
}

function askInternQuestions() {
  inquirer
    .prompt([...employeeQuestions, ...internQuestions])
    .then((inputResponses) => {
      let myIntern = new Intern(
        inputResponses.id,
        inputResponses.employeeName,
        inputResponses.email,
        inputResponses.school
      );
      allData.push(myIntern);
      init();
    });
}

function askEngineerQuestions() {
  inquirer
    .prompt([...employeeQuestions, ...engineerQuestions])
    .then((inputResponses) => {
      console.log(inputResponses);
      const myEngineer = new Engineer(
        inputResponses.id,
        inputResponses.employeeName,
        inputResponses.github,
        inputResponses.email
      );
      allData.push(myEngineer);
      init();
    });
}
function askManagerQuestions() {
  inquirer
    .prompt([...employeeQuestions, ...managerQuestions])
    .then((inputResponses) => {
      console.log(inputResponses);
      const myManager = new Manager(
        inputResponses.employeeName,
        inputResponses.id,
        inputResponses.officeNumber,
        inputResponses.email
      );
      allData.push(myManager);
      init();
    });
}
async function askEmployeeQuestions() {
  await inquirer.prompt(employeeQuestions).then((inputResponses) => {
    const myEmployee = new Employee(
      inputResponses.employeeName,
      inputResponses.id,
      inputResponses.email
    );
    allData.push(myEmployee);
    init();
  });
}

// module.exports = newTeam;
function generateHTML() {
  console.log(allData);
  //format data to render to html
  //insert data into html, then return that value
  //fs.writeFileSync, save as index.html

  // Print the answers into a HTML file which you can deploy

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <link rel="stylesheet" type="text/css" href="/style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    
  <div class="square">
  <p>Intern</p>
  <p class="name"> Name: ${allData[0].getName()}</p>
  <p class="id">ID: ${allData[0].getId()}</p>
  <p class="id">Email: ${allData[0].getEmail()}</p>
  <p class="school">School: ${allData[0].getSchool()}</p>

  <div class="square">
  <p>Engineer</p>
  <p class="name"> Name: ${allData[1].getName()}</p>


</div>

 

  </body>
  </html>
`;

  fs.writeFileSync("answers.html", html);
  console.log("HTML file generated successfully.");
}
init();
