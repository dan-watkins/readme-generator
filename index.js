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
}) => `# Repository
${repository}
## Title
${title}
## Description
${description}
## License
${license}
## Username
${username}
## Email
${email}`;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "repository",
    message: "Please enter desired repository name",
  },
  {
    type: "input",
    name: "title",
    message: "Please enter a title for your project",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide description for your application",
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
