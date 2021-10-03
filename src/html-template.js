// Here we will create the HTML Template that will pull the function information from the lib folder files

//function that creates cards for properties from object

const generateEmployeeCard = objectArray =>  {

  //list of employees
  // use filter and map functions to create cards for each employee. use join method to chain cards
  return ``;

};




//function that returns a string of good html
module.exports =  generateHTML => {
    
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
    
    </header>
    <main class="">
      ${generateEmployeeCard()}
    </main>
    <footer class="">

    </footer>
  </body>
  </html>
  `;
};


//body above the list of employees (header, container opening, body opening)
//body bbelow list (closing tags and footer)