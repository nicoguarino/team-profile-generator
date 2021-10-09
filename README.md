# Team Profile Generator

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Code Sample](#code-sample)
- [Acknowledgement](#acknowledgement)
- [Contributing](#contributing)
- [License](#license)

## About <a name = "about"></a>

Team Profile Generator is a node based program that based of user prompts will dynamically create a website that displays team members.

## Getting Started <a name = "getting-started"></a>

* [Git Hub Pull](https://github.com/nicoguarino/team-profile-generator.git)

## Installation <a name = "installation"></a>

1. Download Node to be able to run application
2. Download Inquirer by npm i inquirer
3. To run application type in the command line node index.js

## Code Sample <a name = "code-sample"></a>

![Sample Code](https://github.com/nicoguarino/team-profile-generator/blob/main/images/sample_code.png?raw=true "Sample Code")

### Sample Code
```JavaScript Sample
// add function to prompt user to select additional employee
const additionalEmployee = () => {
  inquirer.prompt({
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
```

## Authors and acknowledgement <a name = "acknowledgement"></a>

Nico (Filipu) Guarino


## Contributing <a name = "contributing"></a>

Team Profile Generator is open for contrubiting, however check with the creator first before making any permanent changes. The creator is opening to creative ideas and tweeking of design, but it must be approved first.

## License <a name = "license">

(c) 2021 Team Profile Generator

