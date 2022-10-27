


// imports classes from JS files: 


const Manager = require('./assets/javascript/manager');
const Engineer = require('./assets/javascript/engineer');
const Intern = require('./assets/javascript/intern');

const path = require('path');
const inquirer = require('inquirer');
const fsAsync = require('fs/promises');
const generateHtml = require('./generateHTML');

const team = [];

const questions = [
  {
      type: 'list', 
      name: 'title', 
      message: 'What is the job Title of your Worker?', 
      choices: ['Manager', 'Engineer', 'Intern']
  },
  {
      type: 'input', 
      name: 'name', 
      message: 'What is the name of your worker?',
  },
  {
      type: 'input',
      name: 'id', 
      message: 'What is the ID number of your Worker?',
  },
  {
      type: 'input', 
      name: 'email', 
      message: 'What is the Email of your Worker?', 
  },
  {
    when: (answer) => answer.title === 'Engineer', 
    type: 'input', 
    name: 'github',
    message: 'What is their Github username?', 
    
}, 
{
    when: (answer) => answer.title === 'Intern', 
    type: 'input', 
    name: 'school', 
    message: 'What is the name of their school?',
}, 
{
    when: (answer) => answer.title === 'Manager', 
    type: 'input', 
    name: 'officeNum', 
    message: 'What is their office number?'
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
        switch(answers.title) {
            case  'Manager':
                const manager = new Manager(answers.id, answers.email, answers.name, answers.officeNum)
                team.push(manager)
                break
            case 'Intern':
                const intern = new Intern(answers.id, answers.email, answers.name, answers.school)
                team.push(intern)
                break 
            case 'Engineer':
                const engineer = new Engineer(answers.id, answers.email, answers.name, answers.github) 
                team.push(engineer)
                break  
            }
    followOn()


    })
}
function followOn() {
    inquirer.prompt(
        [{
            type: 'list',
            name: 'end', 
            message: 'Would you like to add another worker?',
            choices: ['yes', 'no'],
        }]
    )

    .then(answers => {
        switch(answers.end) {
            case 'yes': 
                promptUser() 
                break
                default: 
                writeToFile('index.html', generateHtml(team));
                    
                    
        }
    }) 
}





promptUser();

