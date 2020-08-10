const generateManager = function (manager) {
    return`
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}, ${manager.getRole()}</h5>
    <p class="card-text">ID: ${manager.getId()}</p>
    <p class="card-text">Office Number: ${manager.officeNumber}</p>
    <a href="mailto:${manager.getEmail()}" class="btn btn-primary">${manager.getEmail()}</a>
  </div>
</div>`
}
const generateEngineer = function (engineer) {
    return`
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.getName()}, ${engineer.getRole()}</h5>
    <p class="card-text">ID: ${engineer.getId()}</p>
    <a class="card-text" href="https://github.com/${engineer.getGithub()}">GitHub: ${engineer.getGithub()}</a>
    <a href="mailto:${engineer.getEmail()}" class="btn btn-primary">${engineer.getEmail()}</a>
  </div>
</div>`
}

const generateIntern = function (intern) {
    return`
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.getName()}, ${intern.getRole()}</h5>
    <p class="card-text">ID: ${intern.getId()}</p>
    <p class="card-text">School: ${intern.getSchool()}</p>
    <a href="mailto:${intern.getEmail()}" class="btn btn-primary">${intern.getEmail()}</a>
  </div>
</div>`
}

const generateTeam = function (team) {
    html = [];
    html.push(team
        .filter(employee => employee.getRole() === "Manager")
            .map(manager => generateManager(manager))
        
    )
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => generateEngineer(engineer))
        
    )
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
            .map(intern => generateIntern(intern))
        
    )
    return html.join("");

}


module.exports = teamData => {
    
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">My Team</span>
      </nav>
      <main class="container mt-5" >
      <div class="row">
            ${generateTeam(teamData)}
        </div>
      </main>
</body>
</html>`
}
