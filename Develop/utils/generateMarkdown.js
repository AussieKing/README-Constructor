// Import package needed for this application
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  if (license !== 'None') {
    if (license === 'Apache') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE.md)';
    } else if (license === 'MIT') {
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)';
    } else if (license === 'GPL v3.0') {
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE.md)';
    } else if (license === 'BSD') {
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](LICENSE.md)';
    } else if (license === 'Mozilla Public License 2.0') {
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](LICENSE.md)';
    }
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let licenseLink = '';
if (license !== 'None') {
  licenseLink = "";
} else if (license === 'Apache') {
  licenseLink = `![License](https://opensource.org/licenses/Apache-2.0)`;
} else if (license === 'MIT') {
  licenseLink = `![License](https://opensource.org/licenses/MIT)`;
} else if (license === 'GPL v3.0') {
  licenseLink = `![License](https://www.gnu.org/licenses/gpl-3.0)`;
} else if (license === 'BSD') {
  licenseLink = `![License](https://opensource.org/licenses/BSD-3-Clause)`;
} else if (license === 'Mozilla Public License 2.0') {
  licenseLink = `![License](https://opensource.org/licenses/MPL-2.0)`;
}
return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if(license !== 'None') {
    licenseSection = "";
  } else {
    licenseSection = `## License
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    `;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  
  # ${data.title}

  ## ${renderLicenseBadge(data.license)} ${renderLicenseSection(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ### Please install the app using the following command:
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This application is covered under the ${data.license} license.
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions or inquiries, please reach out to me via [GitHub](https://github.com/${data.github}) or email me at ${data.email}
}
`;
}

module.exports = generateMarkdown;
