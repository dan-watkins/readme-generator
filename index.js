const inquirer = require("inquirer");
const fs = require("fs");

const generateBadge = (license) => {
  switch (license) {
    case "MIT License":
      return `[![License: ${license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "GNU Lesser General Public License 3.0":
      return `[![License: ${license}](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    case "Mozilla Public License 2.0":
      return `[![License: ${license}](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "GNU Affero General Public License v3.0":
      return `[![License: ${license}](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    case "The Unlicense":
      return `[![License: ${license}](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    case "Apache License 2.0":
      return `[![License: ${license}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "GNU General Public License v3.0":
      return `[![License: ${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
};

const generateREADME = ({
  title,
  repository,
  description,
  installation,
  usage,
  contribution,
  tests,
  license,
  username,
  email,
}) => `# ${title}

${generateBadge(license)}

## ${repository}
## Description
${description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
## Installation
${installation}
## Usage
${usage}
## Contribution
${contribution}
## Tests
${tests}
## License
${license}
## Questions
You can reach me at ${email} or find me at https://github.com/${username}
`;

const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter a title for your project",
  },
  {
    type: "input",
    name: "repository",
    message: "Please enter desired repository name",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide description for your application",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage details",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide contribution details",
  },
  {
    type: "input",
    name: "tests",
    message: "What tests are included?",
  },
  {
    type: "list",
    name: "license",
    message: "Provide license if applicable",
    choices: [
      "MIT License",
      "GNU Lesser General Public License 3.0",
      "Mozilla Public License 2.0",
      "GNU Affero General Public License v3.0",
      "The Unlicense",
      "Apache License 2.0",
      "GNU General Public License v3.0",
    ],
  },
  {
    type: "input",
    name: "username",
    message: "GitHub Username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter Email",
  },
];

inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateREADME(answers);
  fs.writeFileSync("./README.md", readmeContent, (err) =>
    err ? console.log(err) : console.log("Success")
  );
});

function init() {}

init();
