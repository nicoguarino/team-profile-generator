// Here we will create the HTML Template that will pull the function information from the lib folder files



const generateEmployeeCard = objectArray => {
  console.log(`line 9 ${objectArray[0].name}`);
  objectArray.forEach(employee => {
    console.log(employee.getRole());

    switch (employee.getRole()) {
      case 'Manager':
          return `
            <div class="col-lg-6 mb-4">
              <div class="card-body">
    
                <h2 class="card-title">${employee.name}</h2>
                <h3 class="card-title">${employee.getRole()}</h3>
                <p>ID: ${employee.id}</p>
                <a href="mailto:${employee.email}" target="_blank">Email</a>
                <p>Office Number: ${employee.officeNumber}</p>
    
              </div>
            </div>
          `;

      case 'Engineer':
        return `
        <div class="col-lg-6 mb-4">
          <div class="card-body">

            <h2 class="card-title">${employee.name}</h2>
            <h3 class="card-title">${employee.getRole()}</h3>
            <p>ID: ${employee.id}</p>
            <a href="mailto:${employee.email}" target="_blank">Email</a>
            <a href="https://github.com/${employee.github}" class="btn btn-outline-primary btn-sm" target="_blank">GitHub</a>
    
          </div>
        </div>
       `;
      
      case 'Intern':
        return `
        <div class="col-lg-6 mb-4">
         <div class="card-body">
  
            <h2 class="card-title">${employee.name}</h2>
            <h3 class="card-title">${getRole()}</h3>
            <p>id: ${employee.id}</p>
            <a href="mailto:${employee.email} " target="_blank">Email</a>
            <p>School: ${employee.school}</p>
  
          </div>
        </div>
        `; 
    }
  });
  //list of employees
  // use filter and map functions to create cards for each employee. use join method to chain cards
};




//function that returns a string of good html
//body above the list of employees (header, container opening, body opening)
//body bbelow list (closing tags and footer)

// start writing styling for css and html classes using bootstrap
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

