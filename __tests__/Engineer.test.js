const Engineer = require('../lib/Engineer');

test ("Checks to see if a github is a string", () => {
    const engineer = new Engineer('Chelsea', 543636, "1234@gmail.com", "KRAY306090");

    expect(engineer.github).toEqual(expect.any(String));
});
test ("returned username matches", () => {
    const engineer = new Engineer('Chelsea', 543636, "1234@gmail.com", "KRAY306090");

    expect(engineer.getGithub()).toEqual(engineer.github);
});
test ("checks if the string 'Engineer is returned", () => {
    const engineer = new Engineer('Chelsea', 543636, "1234@gmail.com", "KRAY306090");

    expect(engineer.getRole()).toEqual("Engineer");
});