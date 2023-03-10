var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var lat = 41.390205;
var lon = 2.154007;
var API_key = '3356a3346fdf41242690eef93099bd6f';
var climaApi = "https://api.openweathermap.org/data/2.5/weather?lat=".concat(lat, "&lon=").concat(lon, "&appid=").concat(API_key);
var contClima = document.getElementById('clima');
var mostraClima = function () { return __awaiter(_this, void 0, void 0, function () {
    var respuesta, datos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(climaApi)];
            case 1:
                respuesta = _a.sent();
                return [4 /*yield*/, respuesta.json()];
            case 2:
                datos = _a.sent();
                contClima.innerHTML = datos.weather[0].description;
                console.log(datos);
                return [2 /*return*/];
        }
    });
}); };
mostraClima();
var apiUrl = 'https://icanhazdadjoke.com/';
var option = {
    headers: {
        'Accept': 'application/json'
    }
};
var apiUrl2 = 'https://api.chucknorris.io/jokes/random';
var contAcud = document.getElementById('contenido_acudit');
var contScore = document.getElementById('botones_score');
var botAcud = document.getElementById('boton_acudit');
var reportAcudits = [];
//Dad jokes
function dadesApi() {
    return __awaiter(this, void 0, void 0, function () {
        var respuesta, datos, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch(apiUrl, option)];
                case 1:
                    respuesta = _a.sent();
                    if (!(respuesta.status === 200)) return [3 /*break*/, 3];
                    return [4 /*yield*/, respuesta.json()];
                case 2:
                    datos = _a.sent();
                    contAcud.innerHTML = datos.joke;
                    contScore.innerHTML =
                        '<button onclick="rate(1)">1</button>' +
                            '<button onclick="rate(2)">2</button>' +
                            '<button onclick="rate(3)">3</button>';
                    botAcud.innerHTML = '<button type="button" class="primary_button" onclick="generaAcudit()">Següent acudit</button>';
                    return [3 /*break*/, 4];
                case 3:
                    console.log('Ha habido un error');
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
//chuck Norris Jokes
function dadesApi2() {
    return __awaiter(this, void 0, void 0, function () {
        var respuesta, datos, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, fetch(apiUrl2)];
                case 1:
                    respuesta = _a.sent();
                    if (!(respuesta.status === 200)) return [3 /*break*/, 3];
                    return [4 /*yield*/, respuesta.json()];
                case 2:
                    datos = _a.sent();
                    contAcud.innerHTML = datos.value;
                    contScore.innerHTML =
                        '<button onclick="rate(1)">1</button>' +
                            '<button onclick="rate(2)">2</button>' +
                            '<button onclick="rate(3)">3</button>';
                    botAcud.innerHTML = '<button type="button" class="primary_button" onclick="generaAcudit()">Següent acudit</button>';
                    return [3 /*break*/, 4];
                case 3:
                    console.log('Ha habido un error');
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
var rating = 0;
function rate(score) {
    rating = score;
    return rating;
}
function generaAcudit() {
    // Recollim la data en format ISO
    var d = new Date();
    var fecha = d.toISOString();
    // Creem l'objecte acudit
    var acudit = {
        joke: contAcud.innerHTML,
        score: rating,
        date: fecha
    };
    // Guardem l'acudit a una array i la mostrem per consola
    reportAcudits.push(acudit);
    console.log(reportAcudits);
    // Resetegem el valor del rating
    rating = null;
    // Recollim i mostrem els acudits de la API
    callRandomApis();
}
//Crida random a Api1 o Api2
function callRandomApis() {
    var random = Math.round(Math.random() * 10);
    if (random > 5) {
        dadesApi();
    }
    dadesApi2();
}
//alternar
/*
function showRandomJoke(){
    let option = Math.round(Math.random() * 10);
    let random= (option > 5)? chuckJoke() : loadJoke();
  }
  
  document.getElementById("acudit")?.addEventListener("click", showRandomJoke);
*/ 
