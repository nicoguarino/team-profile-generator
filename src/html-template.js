// Here we will create the HTML Template that will pull the function information from the lib folder files
const {Manager} = require('../lib/Manager');
const {Engineer} = require('../lib/Engineer');
const {Intern} = require('../lib/Intern');


//function that creates cards for properties from object
const generateEmployeeCard = objectArray => {

  //list of employees
  // use filter and map functions to create cards for each employee. use join method to chain cards
  return `
  ${objectArray
    .filter(({Manager}) => Manager)
    .map(({name, id, email, officeNumber, role}) => {
      return `
      <div class="col-lg-6 mb-4">
        <div class="card-body">

          <h2 class="card-title">${name}</h2>
          <h3 class="card-title">${role}</h3>
          <p>ID: ${id}</p>
          <a href="mailto:${email}" target="_blank">Email</a>
          <p>Office Number: ${officeNumber}</p>

        </div>
      </div>
      `;
    }) 
  .join('')}

  ${objectArray
    .filter(({Engineer}) => Engineer)
    .map(({name, id, email, github, role}) => {
      return `
      <div class="col-lg-6 mb-4">
        <div class="card-body">

          <h2 class="card-title">${name}</h2>
          <h3 class="card-title">${role}</h3>
          <p>ID: ${id}</p>
          <a href="mailto:${email}" target="_blank">Email</a>
          <a href="https://github.com/${github}" class="btn btn-outline-primary btn-sm" target="_blank">GitHub</a>
    
        </div>
      </div>
      `;
    }) 
  .join('')}

  ${objectArray
    .filter(({Intern}) => Intern)
    .map(({name, id, email, school, role}) => {
      return `
      <div class="col-lg-6 mb-4">
        <div class="card-body">

        <h2 class="card-title">${name}</h2>
        <h3 class="card-title">${role}</h3>
        <p>id: ${id}</p>
        <a href="mailto:${email} " target="_blank">Email</a>
        <p>School: ${school}</p>

        </div>
      </div>
      `;
    }) 
  .join('')}
  `;
};




//function that returns a string of good html
//body above the list of employees (header, container opening, body opening)
//body bbelow list (closing tags and footer)

// start writing styling for css and html classes using bootstrap
function generateHTML() {
    
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
     integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"crossorigin="anonymous">
           
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
    integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
    
    </header>
    <main class="container">
      <div class="row">
          ${generateEmployeeCard(Manager)}
          ${generateEmployeeCard(Engineer)}
          ${generateEmployeeCard(Intern)}
      </div>
    </main>
    <footer class="">

    </footer>
  </body>
  </html>
  `;
};

module.exports = generateHTML;

