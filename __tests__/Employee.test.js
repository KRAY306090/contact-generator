const Employee = require("../lib/Employee");

test("creates Employee object", () => {
    const employee = new Employee('Chelsea', 543636, '1234@gmail.com');

    expect(employee.name).toBe('Chelsea');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
test("returns employee's name", () => {
    const employee = new Employee('Chelsea', 543636, "1234@gmail.com");

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});
test("returns value of employee's id", () => {
    const employee = new Employee('Chelsea', 543636, "1234@gmail.com");

    expect(employee.getId()).toEqual(employee.id);
});
test("returns the email of employee", () => {
    const employee = new Employee('Chelsea', 543636, "1234@gmail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
test("return the string 'employee'", () => {
    const employee = new Employee('Chelsea', 543636, "1234@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
})