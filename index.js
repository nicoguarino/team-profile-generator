const inquirer = require('inquirer');
const generateHtmlTemplate = require('./src/html-template');
const {writeFile, copyFile} = require('./utils/generateHTML');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//assigns the object to each array based on what type of employee is selected
const choices = {manager: [], engineer: [], intern: []};

//general questions
const userQuestions = [
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
  }
]

//manager specific questions
const managerQuestions = {
        // Manager Office Number
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the Managers Office Number: ',
        validate: officeNumberInput  => {
          if (officeNumberInput) {
              return true;
          } else {
              console.log('Please enter the office number.');
              return false;
          }
        }
}

//engineer specific questions
const engineerQuestions = {
          // Engineer gitHub name
          type: 'input',
          name: 'gitHub',
          message: 'Enter the Engineers GitHub name: ',
          validate: gitHubInput  => {
            if (gitHubInput) {
                return true;
            } else {
                console.log('Please enter the user gitHub name.');
                return false;
            }
          }
}

//intern specific questions
const internQuestions = {
          // Intern's School name
          type: 'input',
          name: 'school',
          message: 'Enter the Interns School Name: ',
          validate: schoolInput  => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter the School name.');
                return false;
            }
          }
}

// Prompts user to create Manager properity and prompts if they want to add another employee
const promptQuestions = () => {
  inquirer.prompt(userQuestions.concat(managerQuestions))
    .then( data => {
      // save object to array
      const manager = new Manager(data.name, data.Id, data.email, data.officeNumber);
      choices.manager.push(manager);
      additionalEmployee();
    });
};

// add function to prompt user to select additional employee
const additionalEmployee = () => {
  inquirer.prompt(
    {
      type: 'list',
      name: 'role',
      message: 'Would you like to select another employee: ',
      choices: ['Engineer', 'Intern', 'None'],
    }).then( ({role}) => {
      switch (role) {
        case 'Engineer':
          addEngineer();
          break;

        case 'Intern':
          addintern();
          break;
        
        default:
          // take object and apply writeFile
          console.log(choices);
          writeFile(generateHtmlTemplate(choices));
          copyFile();
          break;
      }
    });
};

// appends engineer questions to prompt questions and then pushes it into choices.engineer array
function addEngineer() {
  inquirer.prompt(userQuestions.concat(engineerQuestions))
    .then(data => {
      // save object to array
      const engineer = new Engineer(data.name, data.Id, data.email, data.gitHub);
      choices.engineer.push(engineer);
      additionalEmployee();
    });
}

// appends intern questions to prompt questions and then pushes it into choices.intern array
function addintern() {
  inquirer.prompt(userQuestions.concat(internQuestions))
  .then(data => {
    // save object to array
    const intern = new Intern(data.name, data.Id, data.email, data.school);
    choices.intern.push(intern);
    additionalEmployee();
  });
}

//runs application
function init() {
  promptQuestions();
};

init();