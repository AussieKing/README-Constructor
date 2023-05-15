// Include packages and modules needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What is the title of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: "Please provide a detailed description of your project.",
  },
  {
    type: 'input',
    name: 'installation',
    message: "What are the steps required to install your project?",
  },
  {
    type: 'input',
    name: 'usage',
    message: "Provide instructions and examples for use of your project.",
  },
  {
    type: 'list',
    name: 'license',
    message: "Please select one of the following licenses used for your project.",
    choices: ['None', 'Apache', 'MIT', 'GPL v3.0', 'BSD', 'Mozilla Public License 2.0'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: "Please list any contributors to your project.",
  },
  {
    type: 'input',
    name: 'tests',
    message: "Please provide any tests written for your application and provide examples on how to run them.",
  },
  {
    type: 'input',
    name: 'username',
    message: "What is your GitHub username?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email address?",
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Success! Your README.md file has been generated!');
    }
  });
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (data) {
      console.log(data);
      const readme = generateMarkdown(data);
      writeToFile('README.md', readme);
    });
}

// Function call to initialize app
init();
