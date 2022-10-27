



const Manager = require('../assets/javascript/manager');


test('should create an object from Manager', () => {
    const manager = new Manager(24, 'alexanders.tischner@outlook.com', 'Sebastian', 8019132824);

    expect(manager.idNum).toEqual(expect.any(Number));
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
})

test('should return Manager from returnTitle()', () => {
    const manager = new Manager(24, 'alexanders.tischner@outlook.com', 'Sebastian', 8019132824);
    
    expect(manager.returnTitle()).toEqual('Manager');
});

test('should return String from returnOfficeNum()', () => {
    const manager = new Manager(24, 'alexanders.tischner@outlook.com', 'Sebastian', 8019132824);
    
    expect(manager.returnOfficeNum()).toEqual(expect.any(Number));
})

