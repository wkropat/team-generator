// Import node module
const fs = require('fs');
const inquirer = require('inquirer');

// Employee Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// Helper Functions
const generateHTML = require('./src/generateHTML');
