const API_URL = "https://icanhazdadjoke.com/";

function mostrarAcudit() {

    fetch('https://icanhazdadjoke.com/', { 
        headers: {
            'Accept': 'application/json'
        }})
        .then(response => response.json())
        .then(json => console.log(json));

}