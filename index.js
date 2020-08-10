const fs = require("fs");
const path = require("path");
//const generate = require("./src/page-template.js");
const inquirer = require("inquirer");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");
const employeeArr = [];
const idArray = [];



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
            //console.log(manager);
            employeeArr.push(manager);
            idArray.push(managerData.id);
            //console.log(employeeArr);
            if (managerData.employeeChoice === 'Engineer') {
                addEngineer();
            }
            else {
                addIntern();
            }
        });
};
const addEngineer = () => {
    console.log(`
        ===================
        Add a New Employee
        ===================
    `);
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
            //console.log(engineer);
            employeeArr.push(engineer);

            if (engineerData.employeeChoice === 'Engineer') {
                addEngineer();
            }
            else if (engineerData.employeeChoice === 'Intern') {
                addIntern();
            }
            else {
                //console.log(employeeArr);
                buildTeam();
            }
        });

}

const addIntern = () => {
    console.log(`
        ===================
        Add a New Employee
        ===================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern's name?",
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
            message: "What is the Intern's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the Intern's school?"
        },
        {
            type: 'list',
            name: 'employeeChoice',
            message: 'What type of employee would you like to add next?',
            choices: ['Engineer', 'Intern', "I'm done"]
        }

    ])
        .then(internData => {
            const intern = new Intern(internData.name, internData.id, internData.email, internData.school);
            //console.log(intern);
            employeeArr.push(intern);

            if (internData.employeeChoice === 'Engineer') {
                addEngineer();
            }
            else if (internData.employeeChoice === 'Intern') {
                addIntern();
            }
            else {
                //use this to initialize the generate page function?
                //console.log(employeeArr);
                buildTeam();
            }
        });

}

function buildTeam() {    //Create the output directory if the output path doesn't exist    
    if (!fs.existsSync(OUTPUT_DIR)) { fs.mkdirSync(OUTPUT_DIR) }
    fs.writeFileSync(outputPath, render(employeeArr), "utf-8");
    console.log("Your page was created! See team.html.");
}
promptManager();
