const Manager = require('../lib/Manager');

test ("checks to see if office number is a number", () => {
    const manager = new Manager('Chelsea', 543636, "1234@gmail.com", 4199368569);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});
test ("check to be sure 'Manager' is the role returned", () => {
    const manager = new Manager('Chelsea', 543636, "1234@gmail.com", 4199368569);

    expect(manager.getRole()).toEqual("Manager");
});