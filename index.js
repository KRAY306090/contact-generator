const fs = require("fs");
const generatePage = require("./src/page-template.js");
const inquirer = require("inquirer");

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Manager's name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?"
        }

    ]);
};
const addEmployees = contactData => {
    if (!contactData.employees) {
        contactData.employees = [];
    }
    console.log(`
        =================
        Add a New Employee
        =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Employee's name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the Employee name!');
                  return false;
                }
              }

        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another Employee?',
            default: false

        }
    ])
    .then(employeeData => {
        contactData.employees.push(employeeData);
        if(employeeData.confirmAddEmployee) {
            return addEmployee(contactData);
        }
        else {
            return contactData;
        }
    });
};

promptUser()
.then(addEmployees)
.then(contactData => {
    console.log(contactData);
    //const pageHTML = generatePage(contactData);

    //fs.writeFile('./dist/index.html', pageHTML, err => {
        //if (err) throw new Error(err);
        //console.log('Page created! Checkout the dist/ directory to find your Contact info page!');
    //});
});
