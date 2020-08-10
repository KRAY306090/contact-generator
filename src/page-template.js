const generateManager = function (manager) {
    return`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <p class="card-text">${manager.getId()}</p>
    <p class="card-text">${manager.officeNumber}</p>
    <a href="#" class="btn btn-primary">${manager.getEmail()}</a>
  </div>
</div>
    `
}
const generateEngineer = function (engineer) {
    return`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${engineer.getName()}, ${engineer.getRole()}</h5>
    <p class="card-text">${engineer.getId()}</p>
    <p class="card-text">${engineer.getGithub()}</p>
    <a href="#" class="btn btn-primary">${engineer.getEmail()}</a>
  </div>
</div>
    `
}

const generateIntern = function (intern) {
    return`
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${intern.getName()}</h5>
    <p class="card-text">${intern.getId()}</p>
    <p class="card-text">${intern.getSchool()}</p>
    <a href="#" class="btn btn-primary">${intern.getEmail()}</a>
  </div>
</div>
    `
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
      <main>
            ${generateTeam(teamData)}
      </main>
</body>
</html>`
}
