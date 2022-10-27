


const Intern = require('../assets/javascript/intern');

test('should create an object from Manager', () => {
    const intern = new Intern(24, 'alexanders.tischner@outlook.com', 'Sebastian', 'Univeristy of Utah');

    expect(intern.idNum).toEqual(expect.any(Number));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('should return Intern from returnTitle()', () => {
    const intern = new Intern(24, 'alexanders.tischner@outlook.com', 'Sebastian', 'Univeristy of Utah');

    expect(intern.returnTitle()).toEqual('Intern');
});

test('should return a string from returnSchooName()', () => {
    const intern = new Intern(24, 'alexanders.tischner@outlook.com', 'Sebastian', 'Univeristy of Utah');

    expect(intern.returnSchoolName()).toEqual(expect.any(String));
});