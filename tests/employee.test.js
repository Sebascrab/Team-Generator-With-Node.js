




const Worker = require('../assets/javascript/employee');


test('should create an object from worker that equals a number/string for values', () => {
    const worker = new Worker(24, 'alexanders.tischner@outlook.com', 'Sebastian');

    expect(worker.idNum).toEqual(expect.any(Number));
    expect(worker.name).toEqual(expect.any(String));
    expect(worker.email).toEqual(expect.any(String));
});

test('should get employee id', () => {
    const worker = new Worker(24, 'alexanders.tischner@outlook.com', 'Sebastian');

    expect(worker.returnidNum()).toEqual(expect.any(Number));
});

test('should get employee title', () => {
    const worker = new Worker(24, 'alexanders.tischner@outlook.com', 'Sebastian');

    expect(worker.getTitle()).toEqual('Worker');
});

test('should get employee email', () => {
    const worker = new Worker(24, 'alexanders.tischner@outlook.com', 'Sebastian');

    expect(worker.returnEmail()).toEqual(expect.any(String));
});

test('should get employee name', () => {
    const worker = new Worker(24, 'alexanders.tischner@outlook.com', 'Sebastian');

    expect(worker.returnName()).toEqual(expect.any(String));
});

