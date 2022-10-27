



const Engineer = require('../assets/javascript/engineer');

test('should create an object from Engineer', () => {
    const engineer = new Engineer(24, 'alexanders.tischner@outlook.com', 'Sebastian', 'Sebascrab');

    expect(engineer.idNum).toEqual(expect.any(Number));
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('should return Engineer from returnTitle()', () => {
    const engineer = new Engineer(24, 'alexanders.tischner@outlook.com', 'Sebastian', 'Sebascrab');

    expect(engineer.returnTitle()).toEqual('Engineer');
});

test('should return github from returnGitHubUser()', () => {
    const engineer = new Engineer(24, 'alexanders.tischner@outlook.com', 'Sebastian', 'Sebascrab');

    expect(engineer.returnGitHubUser()).toEqual(expect.any(String));
});