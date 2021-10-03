// will inherit Employee func 
const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);

      // gitHub
    this.gitHub = gitHub;
  };
  // will need the following:
  // ask for github username

  // getGitHub()
  getGitHub() {
    return this.gitHub;
  }

 // overridden to return 'Engineer'
  getRole() {
    return 'Engineer';
  } 
};




module.exports = Engineer;