// Employee will be the parent class
class Employee {
  constructor(name, id, email) {

    // name
    this.name = name;

    // id 
    this.id = id;

    // email
    this.email = email;
  }

    // properties needed are:

  // getName()
  getName() {
    return this.name;
  }
  // getId()
  getId() {
    return this.id;
  }
  // getEmail()
  getEmail() {
    return this.email;
  }

  // getRole() Return 'Employee'
  getRole() {
    return 'Employee';
  }
};


module.exports = Employee;