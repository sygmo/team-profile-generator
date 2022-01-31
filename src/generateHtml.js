function generateManagerCard(manager) {
    return `<div class="card shadow" style="width: 18rem;">
                <div class="card-body bg-primary text-white">
                  <h5 class="card-title">${manager.getName()}</h5>
                  <h6 class="card-subtitle">Manager</h6>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>`;
}

function generateEngineerCard(engineer) {
    return `<div class="card shadow" style="width: 18rem;">
                <div class="card-body bg-primary text-white">
                  <h5 class="card-title">${engineer.getName()}</h5>
                  <h6 class="card-subtitle">Engineer</h6>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>`;
}

function generateInternCard(intern) {
    return `<div class="card shadow" style="width: 18rem;">
                <div class="card-body bg-primary text-white">
                  <h5 class="card-title">${intern.getName()}</h5>
                  <h6 class="card-subtitle">Intern</h6>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>`;
}

function generateCards(data) {
    let allCards = "";

    data.forEach(function(employee) {
        if (employee.getRole() === "Manager") {
            allCards += generateManagerCard(employee);
        } else if (employee.getRole() === "Engineer") {
            allCards += generateEngineerCard(employee);
        } else if (employee.getRole() === "Intern") {
            allCards += generateInternCard(employee);
        } else {
            console.log("Error! Employee type not found.");
        }
    })

    return allCards;
}

function generateHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div class="container-fluid header-div bg-danger text-white">
            <header class="d-flex justify-content-center py3">
                <h1>My Team</h1>
            </header>
        </div>
    
        <div class="container">
            <div class="row justify-content-center">
                ${generateCards(data)}
            </div>
        </div>
    </body>
    </html>`;
}

module.exports = generateHtml;