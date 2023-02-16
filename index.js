const inquirer = require('inquirer');
const fs = require('fs');

const htmlFile = ({ name, location, hire, linkedin, github }) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>My Portfolio</title>
    
</head>
<body class="text-center">
    <h1>Hello my name is ${name}</h1>
    <h1>Current Location: ${location}</h1>
    <h1>Why should we hire you?</h1>
    <h2>${hire}</h2>
    <h1>LinkedIn URL: ${linkedin}</h1>
    <h1>GitHub URL: ${github}</h1>
</body>
</html>`;

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your current location?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Why should we hire you?',
            name: 'hire',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL?',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'github',
        },
    ])
    .then((answers)=> {
        const pageContent = htmlFile(answers);

        fs.writeFile('index.html', pageContent, (err) => {
            if (err) throw err;
            console.log('The file has been created and saved!');
          });
    })

