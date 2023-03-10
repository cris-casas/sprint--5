
const lat = 41.390205;
const lon = 2.154007; 
const API_key = '3356a3346fdf41242690eef93099bd6f';
const climaApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;

const contClima:any = document.getElementById('clima');

const mostraClima = async () => {
    const respuesta = await fetch(climaApi);
    const datos = await respuesta.json();
    contClima.innerHTML = datos.weather[0].description;
    console.log(datos);
}

mostraClima();

const apiUrl:string = 'https://icanhazdadjoke.com/';
const option:any = {
    headers: {
    'Accept': 'application/json'
    }
}
const apiUrl2:string = 'https://api.chucknorris.io/jokes/random';

const contAcud:any = document.getElementById('contenido_acudit');
const contScore:any = document.getElementById('botones_score');
const botAcud:any = document.getElementById('boton_acudit');

const reportAcudits:any = [];

//Dad jokes
async function dadesApi () {

    try {
        const respuesta = await fetch(apiUrl, option)

        if(respuesta.status === 200){
            const datos = await respuesta.json();
            contAcud.innerHTML = datos.joke;
            contScore.innerHTML =
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

//chuck Norris Jokes
async function dadesApi2 () {

    try {
        const respuesta = await fetch(apiUrl2)

        if(respuesta.status === 200){
            const datos = await respuesta.json();
            contAcud.innerHTML = datos.value;
            contScore.innerHTML =
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
    callRandomApis();
    
}

//Crida random a Api1 o Api2
function callRandomApis() {

    let random = Math.round(Math.random()*10);

    if ( random > 5) {
        dadesApi ()
    } dadesApi2 ()

}

//alternar
/*
function showRandomJoke(){
    let option = Math.round(Math.random() * 10);
    let random= (option > 5)? chuckJoke() : loadJoke();
  }
  
  document.getElementById("acudit")?.addEventListener("click", showRandomJoke);
*/