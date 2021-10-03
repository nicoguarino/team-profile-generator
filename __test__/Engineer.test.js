// testing engineer function
const Engineer = require('../lib/Engineer');

test('testing github)', () => {
  const engineer = new Engineer('name', 256, 'nicooo@gmail.com', 'nicoguarino');

  expect(engineer.gitHub).toEqual('nicoguarino');
}); 

test('tests getGitHub()', () => {
  const engineer = new Engineer('name', 256, 'nicooo@gmail.com', 'nicoguarino');

  expect(engineer.getGitHub()).toEqual('nicoguarino');
});

test('test getrole()', () =>  {
  const engineer = new Engineer('nico')

  expect(engineer.getRole()).toBe('Engineer');
});