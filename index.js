const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml');

function startApp() {
    console.log("Welcome to the Team Profile Generator!");

    // Prompt to enter the team manager’s name, employee ID, email address, and office number
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "Please enter the team manager's name: "
            },
            {
                type: 'input',
                name: 'managerId',
                message: "Please enter the team manager's employee ID: ",
                validate(value) {
                    const valid = !isNaN(parseInt(value));
                    return valid || 'Please enter a number.';
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Please enter the team manager's email address: ",
                validate(value) {
                    const pass = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address."
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the team manager's office number: "
            }
        ])
        .then((response) => {
            showMenu();
        });
}

// Present a menu with the option to add an engineer or an intern or to finish building my team
function showMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: "Please choose one of the following options: ",
                choices: ["Add an engineer", "Add an intern", "Finish building my team"]
            }
        ])
        .then((response) => {
            if (response.menu === "Finish building my team") {
                // exit app
                console.log("Thank you for using the generator!");
                return;
            } else if (response.menu === "Add an engineer") {
                addEngineer();
            } else {
                addIntern();
            }
        });
}

// Prompt to enter the engineer’s name, ID, email, and GitHub username
function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Please enter the engineer's name: "
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "Please enter the engineer's employee ID: ",
                validate(value) {
                    const valid = !isNaN(parseInt(value));
                    return valid || 'Please enter a number.';
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "Please enter the engineer's email address: ",
                validate(value) {
                    const pass = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address."
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the engineer's GitHub username: "
            }
        ])
        .then((response) => {
            // return to menu
            showMenu();
        });
}

// Prompt to enter the intern’s name, ID, email, and school
function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Please enter the intern's name: "
            },
            {
                type: 'input',
                name: 'internId',
                message: "Please enter the intern's employee ID: ",
                validate(value) {
                    const valid = !isNaN(parseInt(value));
                    return valid || 'Please enter a number.';
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "Please enter the intern's email address: ",
                validate(value) {
                    const pass = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address."
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school: "
            }
        ])
        .then((response) => {
            // return to menu
            showMenu();
        });
}

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// Start app
startApp();


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab