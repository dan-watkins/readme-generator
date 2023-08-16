// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateREADME = ({
  repository,
  title,
  description,
  license,
  username,
  email,
}) => `# ${title}
## Description
${description}`;

// TODO: Create an array of questions for user input
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
    type: "input",
    name: "license",
    message: "Provide license if applicable",
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

// TODO: Create a function to write README file
// function writeToFile() {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
