// Packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");
const generateHTMLFile = require("./src/generateHTML");

const writeHTML = util.promisify(fs.writeFile);

let teamList = [];
let teamString = ``;

// Init function
async function init() {
    try {
        await promptUser()
        for(let i = 0; i < teamList.length; i++) {
            teamString = teamString + generateHTMLFile.generateDivs(teamList[i])
        }
        let resultHTML = generateHTMLFile.generateHTML(teamString)
        writeHTML("./index.html", resultHTML);
    } catch (err) {
        return console.log(err);}
};

async function promptUser () { 
    // let finishInput = "";
    try {
        let response = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?: ",
            },
            {
                type: "input",
                name: "id",
                message: "Enter the employee's ID: ",
            },
            {
                type: "input",
                name: "email",
                message: "Enter the employee's email address: ",
            },
            {
                type: "list",
                name: "role",
                message: "What what is the employee's role:",
                choices: [
                        "Engineer",
                        "Intern",
                        "Manager"
                ]
            }
        ]);
        if (response.role === "Engineer") {
            let response2 = inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "What is the employee's github username?:",
                },
            ]);
            const newEngineer = new engineer(response2.github,);
            teamList.push(newEngineer);
        } else if (response.role === "Intern") {
            let response3 = inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "What school is the employee attending?:",
                },
            ]);
            const newIntern = new intern(response3.school,);
            teamList.push(newIntern);
        } else if (response.role === "Manager") {
            let response4 = inquirer.prompt([
                {
                    type: "input",
                    name: "office",
                    message: "What is the employee's office number?:",
                },
            ]);
            const newManager = new manager(response4.office,);
            teamList.push(newManager);
        }
    } catch (err) {
        return console.log(err);
    }
};

init();