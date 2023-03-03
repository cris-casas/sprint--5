var API_URL = "https://icanhazdadjoke.com/";
function mostrarAcudit() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (json) { return console.log(json); });
}
