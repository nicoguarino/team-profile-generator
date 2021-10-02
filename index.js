const inquirer = require('inquirer');
const generateHTML = require('./src/html-template');
const {writeFile, copyFile} = require('./utils/generateHTML');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Create a function to initialize app
const ProfileQuestions = () => {
    return inquirer.prompt([
        {
            // employee name
            type: 'input',
            name: 'name',
            message: 'Enter the employee name: ',
            validate: nameInput  => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the employee name.');
                    return false;
                }
            }
        },

        {
            // employee id
            type: 'input',
            name: 'Id',
            message: 'Enter employee Id: ',
            validate: IdInput  => {
                if (IdInput) {
                    return true;
                } else {
                    console.log('Please enter employee Id.');
                    return false;
                }
            }
        },
        {
            // employee Email
            type: 'input',
            name: 'email',
            message: 'Enter employee email: ',
            validate: emailInput  => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter employee email.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please select employee role: ',
            choices: ['manager', 'engineer', 'intern'],
            validate: roleInput  => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('Please enter employee role.');
                    return false;
                }
            }
        }
    ]);
};