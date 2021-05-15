const generateHTML = function (teamString) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Portfolio</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        </head>
        <body>
            <div class="jumbotron">
                <h1 class="text-white text-center">Employee List</h1>
            </div>
            <div class="container-body container-fluid">
                <div class="row">
                    ${teamString} 
                </div>
            </div>  
        </body>
        </html>
        `
}

const generateDivs = function (responses) {
    let question;
    if (responses.title === "Manager") {
        question = `Office Number: ${responses.officeNumber}`
    } else if (responses.title === "Engineer") {
        question = `GitHub Username: ${responses.github}`
    } else if (responses.title === "Intern") {
        question = `School: ${responses.school}`
    }

    return `
        <div class="col-md-4 col-sm-6 col-12 col-lg-3">    
            <div class="card-header bg-primary">
                <h2>${responses.name}</h2>  
                <h2>${responses.title}</h2>
                <ul>
                    <li>Employee ID: ${responses.id}</li>
                    <li>Email:${responses.email}</a></li>
                    <li>${question}</li>
                </ul>
            </div>
        </div>
    ` 
}

exports.generateHTML = generateHTML;
exports.generateDivs = generateDivs;