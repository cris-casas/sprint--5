var contenido = document.getElementById("contenido_acudit");
function mostrarAcudit() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (json) { return contenido.innerHTML = json.joke; });
}
/*

const API_URL = "https://icanhazdadjoke.com/";

function mostrarAcudit() {

    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }})
        .then(response => response.json())
        .then(json => console.log(json));

}

*/ 
