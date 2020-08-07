const fs = require("fs");
const generatePage = require("./src/page-template.js");
const inquirer = require("inquirer");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const promptManager = () => {
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
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office phone number?"
        },
        {
            type: 'list',
            name: 'employeeChoice',
            message: 'What type of employee would you like to add next?',
            choices: ['Engineer', 'Intern']
        }
    ])
    .then(managerData => {
        const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber);
        console.log(manager);
        if (managerData.employeeChoice === 'Engineer') {
            addEngineer();
        }
        else {
            addIntern();
        }
    });
};
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter the name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Engineer's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter the github username for the Engineer.'
        },
        {
            type: 'list',
            name: 'employeeChoice',
            message: 'What type of employee would you like to add next?',
            choices: ['Engineer', 'Intern', "I'm done"]
        }

    ])
    .then(engineerData => {
        const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
        console.log(engineer);

        if (engineerData.employeeChoice === 'Engineer') {
            addEngineer();
        }
        else if (engineerData.employeeChoice === 'Intern') {
            addIntern();
        }
        else 
        {
            return;
        }
    });
    
}

//const addIntern = () => {}

/* const addEmployees = contactData => {
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

promptManager()
.then(addEmployees)
.then(contactData => {
    console.log(contactData);
    //const pageHTML = generatePage(contactData);

    //fs.writeFile('./dist/index.html', pageHTML, err => {
        //if (err) throw new Error(err);
        //console.log('Page created! Checkout the dist/ directory to find your Contact info page!');
    //});
});
*/
promptManager();
