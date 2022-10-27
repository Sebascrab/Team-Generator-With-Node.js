

function managerHtml(team) {
    const html = []
    team.forEach(element => {
        html.push (`<div class="column is-one-forth">
        <div class="card-content has-background-warning-light worker-card">
            <div class="card-title has-text-centered is-size-3 has-background-danger has-text-black-light">
                ${element.name}
            </div>
            <div class="card-header-title is-size-4"><i class="fa-solid fa-book-open-reader">&#160;</i>Manager</div>
            <div class="card-content is-size-5">
                <ul class="list-group">
                    <li class="list-group-item has-text-weight-bold">ID: ${element.idNum}</li> 
                    <li class="list-group-item has-text-weight-bold">Email: ${element.email}</li> 
                    <li class="list-group-item has-text-weight-bold">Office Number: ${element.officeNum}</li> 
                </ul>
            </div>
        </div>
    </div>`)
    
});
return html.join('');
}

function engineerHtml(team) {
    const html = []
    team.forEach(element => {
        html.push (`<div class="column is-fourth">
        <div class="card-content has-background-warning-light worker-card">
            <div class="card-title has-text-centered is-size-3 has-background-success has-text-black-light">
                ${element.name}
            </div>
            <div class="card-header-title is-size-4"><i class="fa-solid fa-hammer">&#160;</i>Engineer</div>
            <div class="card-content is-size-5">
                <ul class="list-group">
                    <li class="list-group-item has-text-weight-bold">ID: ${element.idNum}</li> 
                    <li class="list-group-item has-text-weight-bold">Email: ${element.email}</li> 
                    <li class="list-group-item has-text-weight-bold">Github: ${element.github}</li> 
                </ul>
            </div>
        </div>
    </div>`)
});
return html.join('');
}

function internHtml(team) {
    const html = []
    team.forEach(element => {
        html.push (`<div class="column is-one-forth">
        <div class="card-content has-background-warning-light worker-card">
            <div class="card-title has-text-centered is-size-3 has-background-info has-text-black-light">
                ${element.name}
            </div>
            <div class="card-header-title is-size-4"><i class="fa-solid fa-phone">&#160;</i>Intern</div>
            <div class="card-content is-size-5">
                <ul class="list-group">
                    <li class="list-group-item has-text-weight-bold">ID: ${element.idNum}</li> 
                    <li class="list-group-item has-text-weight-bold">Email: ${element.email}</li> 
                    <li class="list-group-item has-text-weight-bold">School: ${element.school}</li> 
                </ul>
            </div>
        </div>
    </div>`)
});
return html.join('');
}








function generateHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Alexander's Team Generator Using Node.js</title>
        <link rel="stylesheet" href="./assets/css/style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <script src="https://kit.fontawesome.com/619ebb2432.js" crossorigin="anonymous"></script>
    </head>
    
    <body>
        <div class="pageContainer has-background-grey-light">
            <div class="container is-fluid">
                <div class="hero has-shadow is-warning ">
                    <div class="hero-body ">
                        <h1 class="title has-text-centered is-size-1">Alexander's Team</h1>
                    </div>
                </div>
            </div>
            <section class="section">
                <div class="container">
                    <h3 class="title has-text-left is-size-2">Your Members:</h3>
                    <div class="columns has-background-warning">
                        ${managerHtml(data.filter(team => team.returnTitle() === 'Manager'))}
                        ${engineerHtml(data.filter(team => team.returnTitle() === 'Engineer'))}
                        ${internHtml(data.filter(team => team.returnTitle() === 'Intern'))}
                    </div>
                </div>
            </section>
            <footer class="footer has-background-warning">
                <div class="content has-text-centered">
                  <p>
                    <strong>Team Generator Using Node.js</strong> by <a href="https://github.com/Sebascrab/Team-Generator-With-Node.js">Alexander Tischner.</a>
                  </p>
                </div>
              </footer>
        </div>
    </body>
    
    </html>`
}

module.exports = generateHtml