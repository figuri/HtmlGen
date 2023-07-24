const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your portfolio?'
    },
    {
        type: 'input',
        name: 'about',
        message: 'What is your about me section?'
    }
    {
        type: 'input',
        name: 'location',
        message: 'What is your location?'
    }
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    }
    {
        type: 'input',
        name: 'linkedin',
        message: 'What is your LinkedIn username?'
    }
    {
        type: 'input',
        name: 'projects',
        message: 'What are your projects?'
    }
];

// make funtion to parse through question data and create html file
// do this by using fs.writeFile
// use template literals to create html file
// inquirer.prompt(questions).then((data) => {


inquirer
.prompt(questions)
.then((answers) => {
    const userAnswers = generateHTML(answers);