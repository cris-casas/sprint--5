const apiUrl:string = 'https://icanhazdadjoke.com/';
const option:any = {
    headers: {
    'Accept': 'application/json'
    }
}
const contAcud:any = document.getElementById('contenido_acudit');
const contScore:any = document.getElementById('botones_score');
const botAcud:any = document.getElementById('boton_acudit');

const reportAcudits:any = [];

async function dadesApi () {

    try {
        const respuesta = await fetch(apiUrl, option)

        if(respuesta.status === 200){
            const datos = await respuesta.json();
            contAcud.innerHTML = datos.joke;
            contScore.innerHTML=
            '<button onclick="rate(1)">1</button>'+
            '<button onclick="rate(2)">2</button>'+
            '<button onclick="rate(3)">3</button>';
            botAcud.innerHTML = '<button type="button" class="primary_button" onclick="generaAcudit()">Següent acudit</button>';

        } else {
            console.log('Ha habido un error')
        }

    } catch(err){
        console.log(err);
    }
}

let rating:any = 0;

function rate (score:number) {
    rating = score;
    return rating;
}

function generaAcudit () {
    
    // Recollim la data en format ISO
    const d = new Date()
    let fecha:any = d.toISOString() 

    // Creem l'objecte acudit
    const acudit:any = {
        joke: contAcud.innerHTML,
        score: rating,
        date: fecha
    }
    // Guardem l'acudit a una array i la mostrem per consola
    reportAcudits.push(acudit);
    console.log(reportAcudits)
    // Resetegem el valor del rating
    rating = null;
    // Recollim i mostrem els acudits de la API
    dadesApi();
    
}




/* 
function rate (score) {

    // Recollim la data en format ISO
    const d = new Date()
    let fecha:any = d.toISOString() 

    // Creem l'objecte acudit
    let acudit:any = {
        joke: contAcud.innerHTML,
        score:  score,
        date: fecha
    }
    
    // Guardem l'objecte a l'array y es mostra
    reportAcudits.push(acudit);
    console.log(reportAcudits)

}
*/

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

/*
const apiUrl:string = 'https://icanhazdadjoke.com/';
let contAcud:any = document.getElementById('contenido_acudit');
const option:any = {
    
    headers: {
    'Accept': 'application/json'
    }
}

function mostraAcudit() {

    const accion = fetch(apiUrl, option)
        .then((response) => response.json())
        .then((data) => contAcud.innerHTML=data.joke);

}
*/