const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is the process of installing your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does a user uses your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license did you use for your project?',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'Boost Software License 1.0', 'Mozilla Public License 2.0'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are your contributions guidelines?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'How is your project tested?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email addtess for users to reach out',
    },
  ]);
};

const generateREADME = (answers) =>
  `
  # ${answers.title}

  ## Description
   ${answers.description}

  ## Table of Contents
   - [Installation](#installation)
   - [Usage] (#usage)
   - [License] (#license)
   - [Contributing] (#contributing)
   - [Tests] (#tests)
   - [Questions] (#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ![License](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  ${answers.license}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.test}

  ## Questions
  - For additional question, Kindly contact me at ${answers.email}.
  GitHub: [${answers.github}](https://github.com/${answers.github})
    `;

    promptUser()
    .then((answers) => writeFileAsync('sampleREADME.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to sampleREADME.md'))
    .catch((err) => console.error(err));
  
