const inquirer = require("inquirer");
const fs = require("fs");

// you only use relative path when its a code youve written, inquirer isnt.

// Write the file to this location
const writeFile = require("");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the Project Title?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, userInputs) {
  let markDown = generateMarkdown(userInputs);
  console.log(markDown, fileName, userInputs, "hello");

  fs.writeFileSync(fileName, markDown, function () {
    console.log("README.md has been generated.");
  });
}
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    // .then means is a promise, where whatever it is ttached to is prompts in this case (answers)
    // itll wait for the value to come back from the input (yourserlf typing)
    // after it gets the answer itll continue the code
    // the .then will wait your question is answered

    .then((answers) => {
      // pass these answers to generate markdown . js
      console.log(answers);
      writeToFile("readMe.md", answers);

      generateMarkdown(answers);
      console.log(generateMarkdown(answers));
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
