const Intern = require('../lib/Intern');

test ('checks that school name is a string', () => {
    const intern = new Intern('Vanderbilt');

    expect(intern.school).toEqual(expect.any(String));
});
test ("checks that the school name is returned", () => {
    const intern = new Intern('Vanderbilt');

    expect(intern.getSchool()).toEqual(intern.school);
});
test("checks that role value is equal to 'Intern", () => {
    const intern = new Intern('Vanderbilt');

    expect(intern.getRole()).toEqual("Intern");
});