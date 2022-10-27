


// imports classes from JS files: 

const Worker = require('./assets/javascript/worker');
const Manager = require('./assets/javascript/manager');
const Engineer = require('./assets/javascript/engineer');
const Intern = require('./assets/javascript/intern');

const path = require('path');
const inquirer = require('inquirer');
const fsAsync = require('fs/promises');

const questions = [
  {
      type: 'list', 
      name: 'Title', 
      message: 'What is the job Title of your Worker?', 
      choices: ['Manager', 'Engineer', 'Intern', 'None']
  },
  {
      type: 'input', 
      name: 'Name', 
      message: 'What is the name of your worker?',
  },
  {
      type: 'input',
      name: 'ID#', 
      message: 'What is the ID number of your Worker?',
  },
  {
      type: 'input', 
      name: 'Email', 
      message: 'What is the Email of your Worker?', 
  },
];

// function to write HTML file
function writeToFile(fileName, data) {
    fsAsync.writeFile(path.join(process.cwd(), fileName), data)
}


// function to prompt user to answer questions: 
function promptUser() {
    inquirer
    .prompt(
        questions
    )

    // sending answers and calling generateHTML function from generateHTML.js
    .then((answers) => {
        inquirer
        .prompt([
            {
                when: () => answers.Title === 'Engineer', 
                type: 'input', 
                name: 'Github Username',
                message: 'What is their Github username?', 
                
            }, 
            {
                when: () => answers.Title === 'Intern', 
                type: 'input', 
                name: 'School Name', 
                message: 'What is the name of their school?',
            }, 
            {
                when: () => answers.Title === 'Manager', 
                type: 'input', 
                name: 'Office Number', 
                message: 'What is their office number?'
            },



           

        ])


        writeToFile('index.html', generateHTML({...answers}));
    })
}



function init() {
    promptUser()
}

init();

