const generateMarkdown = data => {
    return `# ${data.title}

    
    ## Description
    ${data.description}

    ## Sections
    ${data.sections}

    ## Table of Contents
    * [Installation](#installations)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributors)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## installations
    ${data.installations}

    ## Usage
    ${data.usage}

    ## License
    This project is licensed by ${data.license}

    ## Constributors
    ${data.contributors}

    ## Tests
    ${data.test}

    ## Questions
    If you would like to ask me any questions about this project you can email me here ${data.email} alternatively you can view my other projects at ${data.github}
    
`;
}


// module to create Markdown
module.exports = generateMarkdown;

