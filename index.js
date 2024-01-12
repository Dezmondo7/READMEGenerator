//modules required - fs already installed and inquirer required installing using npm
const fs = require("fs");
const inquirer = require("inquirer");

//link to the generate markdown
const generateMarkdown = require(".utils/generateMarkdown");

//Array of questions saved as an arrow function  
const questions = () => {
    //inquirer used to store questions for user
   return inquirer
    .prompt([
        { 
            type: 'input',
            message: 'What is the title of your project? ',
            name: 'title',
        }, 
        {
            type: 'input',
            message: 'What are the sections entitled? ',
            name: 'entitled',
        },
        {
            type: 'input',
            message: 'Provide a description of your project: ',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please relay your tabel of contents: ',
            name: 'contents',
        },
        {
            type: 'input',
            message: 'What installations did you require? ',
            name: 'installations',
        }
        {
            type: 'input',
            message: 'Describe the usage of your project? ',
            name: 'usage',
        }


    ])
}