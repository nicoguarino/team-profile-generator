// testing employee function

// test  to pull employee expectations 
test('creates new employee object', () => {
    const employee = new Employee('Nico');

    expect(employee.name).toBe('Nico');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('nicoooo@gmail.com');
});