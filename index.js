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
      // change to generate html when done
      forFunction();
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
        inputResponses.email,
        inputResponses.github
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

// install for code here
//
var generatedHTML = "";

function printHtml() {
  //   console.log(allData);
  //format data to render to html
  //insert data into html, then return that value
  //fs.writeFileSync, save as index.html

  // Print the answers into a HTML file which you can deploy

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <link rel="stylesheet" type="text/css" href="./style.css">
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <!-- Adding Bootstrap Links -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

      <title>Document</title>
    </head>
    <body>

    <header>My Team</header>
    <div class="container">
      ${generatedHTML}
      </div>
    </body>
    </html>
  `;

  fs.writeFileSync("answers.html", html);
  console.log("HTML file generated successfully.");
}
function forFunction() {
  for (let i = 0; i < allData.length; i++) {
    console.log(allData[i].getRole());
    // todo: create a function for generatedhtml
    if (allData[i].getRole() === "Engineer") {
      generatedHTML += '<div class = "card">';
      generatedHTML += '<h5 class = "card-header">  Engineer ⚙️ </h5>';
      generatedHTML +=
        '\n <div class = "card-body"><div class = "card-title"> Name:' +
        allData[i].name +
        "</div> \n";
      generatedHTML +=
        '\n <div class = "card-text"> <p> ID:' + allData[i].id + "</p> \n";
      generatedHTML += "\n <p> Email:" + allData[i].email + "</p> \n";
      generatedHTML += "\n <p> GitHub:" + allData[i].github + "</p> \n";
      generatedHTML += "</div> </div> </div>";
    } else if (allData[i].getRole() === "Intern") {
      generatedHTML += '<div class = "card">';
      generatedHTML += '<h5 class = "card-header">  Intern 🤵 </h5>';
      generatedHTML +=
        '\n <div class = "card-body"><div class = "card-title"> Name:' +
        allData[i].name +
        "</div> \n";
      generatedHTML +=
        '\n <div class = "card-text"> <p> ID:' + allData[i].id + "</p> \n";
      generatedHTML += "\n <p> Email:" + allData[i].email + "</p> \n";
      generatedHTML += "\n <p> School:" + allData[i].school + "</p> \n";
      generatedHTML += "</div> </div> </div>";
    } else if (allData[i].getRole() === "Manager") {
      generatedHTML += '<div class = "card">';
      generatedHTML += '<h5 class = "card-header">  Manager 🕴️ </h5>';
      generatedHTML +=
        '\n <div class = "card-body"><div class = "card-title"> Name:' +
        allData[i].name +
        "</div> \n";
      generatedHTML +=
        '\n <div class = "card-text"> <p> ID:' + allData[i].id + "</p> \n";
      generatedHTML += "\n <p> Email:" + allData[i].email + "</p> \n";
      generatedHTML +=
        "\n <p> Office No:" + allData[i].officeNumber + "</p> \n";
      generatedHTML += "</div> </div> </div>";
    }
  }

  printHtml();
}
// function generatehtml
// parameters will be data and it will return a <p></p> + allData.name[i]
// module.exports = newTeam;

init();
