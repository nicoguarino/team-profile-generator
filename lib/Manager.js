// will inherit from Employee function
const Employee = require('./Employee');

// will need the following:

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

      // officeNumber
    this.officeNumber = officeNumber;
  };

  getOfficeNumber() {
    return this.officeNumber;
  }

  // getRole() overridden to return Manager
  getRole() {
    return 'Manager';
  } 
}


module.exports = Manager;