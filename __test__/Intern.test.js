//testing intern function
const Intern = require('../lib/Intern');

test('testing school)', () => {
  const intern = new Intern('name', 256, 'nicooo@gmail.com', 'UNR');

  expect(intern.school).toBe('UNR');
}); 

test('tests getSchool()', () => {
  const intern = new Intern('name', 256, 'nicooo@gmail.com', 'UNR');

  expect(intern.getSchool()).toBe('UNR');
});

test('test getrole()', () =>  {
  const intern = new Intern('nico');

  expect(intern.getRole()).toBe('Intern');
});