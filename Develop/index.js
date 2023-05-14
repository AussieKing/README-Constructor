// TODO: Include packages needed for this application

// Include packages and modules needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// const licenseChoice : ['None', 'Apache', 'MIT', 'GPL v3.0', 'BSD', 'Mozilla Public License 2.0'];

// TODO: Create an array of questions for user input
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
        message: "Please provide any features for your project.",
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

//! Create a function to initialize app and write README file
function writeREADME(data) {

    const licenseType ='';
    const licenseBadge = '';

    fs.writeFile('README.md', generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    );

return `# ${data.title}  ${licenseBadge}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  This application is covered under the ${answers.license} license.
  
  ## Contributing
  ${answers.contribution}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  For any questions or inquiries, please reach out to me via [GitHub](https://github.com/${answers.github}) or email me at ${answers.email}.
  `;
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success! Your README.md file has been generated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile('README.md', writeREADME(answers));
    });
}

// Function call to initialize app
init(
    // writeToFile('README.md', writeREADME(answers))
);
