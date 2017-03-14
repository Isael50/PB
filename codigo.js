var peso;
var pesoEnMarte; // CamelCase

alert ("¿Quieres saber tu peso en Marte?");
peso = prompt("¿Cuál es tu peso en Kg?", "70");
peso = Number(peso);

pesoEnMarte = (peso / 9.81) * 3.711;
alert("Tu peso en Marte es: " + pesoEnMarte + " Kg.");


//----------------------------- Ejemplo 1 -----------------------------
// //alert: Función
// // ()  : Parametros de la función
// // ""  : Cadenas de texto
// var nombre = "Isael";
// var apellido = "FIMI";
// var edad = 33;

// //alert (nombre + " " + apellido + "\n" + edad + " años.");
// alert("2" + 5 * 8);
//----------------------------- Ejemplo 1 -----------------------------