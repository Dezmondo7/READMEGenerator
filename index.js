//modules required - fs already installed just needs calling and inquirer required installing using npm v6.5.0
const fs = require("fs");
const inquirer = require("inquirer");

//link to the generate markdown
const generateMarkdown = require(".utils/generateMarkdown.js");

//Array of questions saved as an arrow function  
const questions = () => {
    //inquirer used to store questions for user
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project? ',
                name: 'title',
                // validation for the users input to return a true value and if not ask the user to re-enter the title
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the title of your project. ');
                        return false;
                    }
                }
            },
    
            {
                type: 'input',
                message: 'Provide a description of your project: ',
                name: 'description',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a description of your project. ');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'What are the sections entitled? ',
                name: 'section',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the sections of your project. ');
                        return false;
                    }

                }
            },
            {
                type: 'input',
                message: 'What installations did you require? ',
                name: 'installations',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a guide to installations. ');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Describe the usage of your project/application? ',
                name: 'usage',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the usage of your project. ');
                        return false;
                    }
                }
            },
            {
                type: 'List',
                message: 'What type of licence would you like to add to your project',
                name: 'license',
                choices: ['MIT', 'GNU', 'BSD'],
                default: ['MIT'],
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please chose a license for your project. ');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Please list any contributers to your project. ',
                name: 'contributors',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please list contributers. ');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'What testing methods did you do? ',
                name: 'test',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter testing methods used. ');
                        return false;
                    }
                }
            }, 
            {
                type: 'input',
                message: 'What is your email address? ',
                name: 'email',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your email adress. ');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'What is your GitHub URL? ',
                name: 'github',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub URL. ');
                        return false;
                    }
                }
            }
        ]);
};

//function to write file readMe file using FS
const writeFile = data => {
    fs.writefile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log('Congratulations your README file has been succesfully generated!');
        }
    })
};

// function to initialise questions
questions()

// returns user answers
.then(answers => {
    return generatePage(answers);
})

//data displays then is passed though writeFile 
.then(data => {
    return writeFile(data);
})

//looks for errors
.catch(err => {
    console.log(err);
})