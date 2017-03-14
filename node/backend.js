var pepito = "Tabasco";
var basededatos = { // Objeto JSON
    usuario: "beto",
    password: "romina"
};

console.log("Arrancando server de Node JS");

var express = require("express"); // Instrucción de Javascript que corre al lado del servidor.
var parcero = require("body-parser"); // Parsea los datos del formulario a un objeto de Javascript.
var web = express(); // Crear aplicación Web.
web.use( parcero.urlencoded({extended: true}) );
var server; // Sevidor corriendo

server = web.listen(8080, function() { // Parámetros (Puerto, Función Anónima)
    console.log("Sevidor arrancado :D");
});

web.get("/", function (req, res) {
    res.sendfile("formulario.html");
});

web.post("/entrar", function (req, res) {
    console.log(req.body);
    // Siempre debe darse una respuesta al navegador (response).
    //res.send("Enviado");
    if(req.body.usuario == basededatos.usuario && req.body.clave == basededatos.password)
        res.send("Bienvenido al área secreta de NodeJs");
    else
        res.send("Shu, shu, fuera de aquí");
});

/* Prueba de URL Amigables */
web.get("/prueba", function (req, res) { // Petición GET con el / como el home de la página web. Función Anónima (request, response)
    res.send("Buen trabajo, lograste un servidor web desde " + pepito); // Enviar texto plano al navegador.
});

// Prueba de HTML
web.get("/hola/mama-es-linda", function (req, res) {
    res.send("Hola <strong>mamá</strong>, estoy triunfando");
});

// Prueba de variables GET y variables globales
web.get("/test", function (req, res) { // http://127.0.0.1:8080/test?avion=airbus&edad=28
    console.log(req);
    res.send("tu avión es el " + req.query.avion + " y tu edad es " + req.query.edad);
});