//generates Manager Card
const generateManager = (employee) => {
  return `
  <div class="employee-card col-lg-3 mb-3">
    <div class="card-body">

      <h3 class="card-title">${employee.name}</h2>
      <h4 class="card-title">${employee.getRole()}</h3>
      <p>ID: ${employee.id}</p>
      <a href="mailto:${employee.email}" target="_blank">Email: ${employee.email}</a>
      <p>Office Number: ${employee.officeNumber}</p>

    </div>
  </div>
`;
}
//generates Engineer Card
const generateEngineer = (employee) => {
  return `
  <div class="employee-card col-lg-3 mb-3">
    <div class="card-body">

      <h3 class="card-title">${employee.name}</h2>
      <h4 class="card-title">${employee.getRole()}</h3>
      <p>ID: ${employee.id}</p>
      <a href="mailto:${employee.email}" target="_blank">Email: ${employee.email}</a></br>
      <a href="https://github.com/${employee.github}" class="btn btn-outline-primary btn-sm" target="_blank">GitHub</a>

    </div>
  </div>
 `;
}
//generates Intern Card
const generateIntern = (employee) => {
  return `
  <div class="employee-card col-lg-3 mb-3">
   <div class="card-body">

      <h3 class="card-title">${employee.name}</h2>
      <h4 class="card-title">${employee.getRole()}</h3>
      <p>ID: ${employee.id}</p>
      <a href="mailto:${employee.email}" target="_blank">Email: ${employee.email}</a>
      <p>School: ${employee.school}</p>

    </div>
  </div>
 `
}

//Maps out content for cards and then returns them to generateHTML function
const generateEmployeeCard = data => {
  // use filter and map functions to create cards for each employee. use join method to chain cards
  const managerContent = data.manager.map(generateManager).join('');
  const engineerContent = data.engineer.map(generateEngineer).join('');
  const internContent = data.intern.map(generateIntern).join('');

  return managerContent + engineerContent + internContent
};

//generates the template for the index.html
function generateHTML(data) {
  console.log(`line 81 ${data}`);
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
      <h2>My Team</h2>
    </header>
    <main class="container">
      <div class="row">
          ${generateEmployeeCard(data)}
      </div>
    </main>
    <footer class="">

    </footer>
  </body>
  </html>
  `;
};

module.exports = generateHTML;

