// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const writeREADME = require('./utils/generateMarkdown.js');
// const licenseChoice : ['None', 'Apache', 'MIT', 'GPL v3.0', 'BSD', 'Mozilla Public License 2.0'];

// Creating an array of questions for user input
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
        name: 'features',
        message: "Please provide any features your projects contains.",
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
        name: 'questions',
        message: "Please provide any questions you may have regarding your project, so that contributors can help.",
    },

    {
        type: 'input',
        name: 'credits',
        message: "Please provide any credits for your project.",
    },
];


// Function to write the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success! Your README.md file has been generated!')
    );
}


// Function to init. the app 
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data);
        let readme = writeREADME(data);
        writeToFile('README.md', readme);
    });
};

init();
