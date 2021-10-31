// Import node module
const fs = require('fs');
const inquirer = require('inquirer');

// Employee Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// Helper Functions
const generateHTML = require('./util/generateHtml');
const employeeRoster = []


// Manager function
function makeManager() {
    inquirer.prompt([
        {
        type: 'input',
        name:'name',
        message:'Who is the team manager?',},
        {
        type: 'input',
        name:'id',
        message:'What is their employee id?',},
        {
        type: 'input',
        name:'email',
        message:'What is their email address?',},
        {
        type: 'input',
        name:'officeNumber',
        message:'What is their office number?',}
    ]).then(({name,id,email,officeNumber}) => {
        employeeRoster.push(new Manager(name,id, email, officeNumber));
        options();

    });
};

// Engineer function
function makeEngineer() {
    inquirer.prompt([
        {
        type: 'input',
        name:'name',
        message:'Who is the new engineer?',},
        {
        type: 'input',
        name:'id',
        message:'What is their employee id?',},
        {
        type: 'input',
        name:'email',
        message:'What is their email address?',},
        {
        type: 'input',
        name:'github',
        message:'What is their github username?',}
    ]).then(({name,id,email,github}) => {
        employeeRoster.push(new Engineer(name,id, email, github));
        options();
    });
};

// Intern function
function makeIntern() {
    inquirer.prompt([
        {
        type: 'input',
        name:'name',
        message:'Who is the new intern?',},
        {
        type: 'input',
        name:'id',
        message:'What is their employee id?',},
        {
        type: 'input',
        name:'email',
        message:'What is their email address?',},
        {
        type: 'input',
        name:'school',
        message:'Where do they go to school?',}
    ]).then(({name,id,email,school}) => {
        employeeRoster.push(new Intern(name,id, email, school));
        options();
    });
};

function options() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Continue building your team?',
            choices: ['Add Engineer', 'Add Intern', 'Quit'],  
       },  
    ]).then(answers => {
        switch (answers.options) {
            case 'Add Engineer':
                makeEngineer();
                break;
            case 'Add Intern':
                makeIntern();
                break;
            default: 
                init();
                break;
        };
    });
};

// Initialize the app
function init() {
    fs.writeFile('./Employees.html', generateHTML(employeeRoster), (err) => err ? console.log(err) : console.log('File written.'));
}

makeManager();