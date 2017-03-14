var dibujo, lienzo, t, b;
function inicio()
{
	t = document.getElementById("usuario");
	b = document.getElementById("dibujalo");
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");

	b.addEventListener("click",	dibujarGrilla);

// Dibujando el borde de Canvas
//	lienzo.moveTo(0,0);
//	lienzo.lineTo(300,0);
//	lienzo.lineTo(300,300);
//	lienzo.lineTo(0,300);
//	lienzo.lineTo(0,0);
//	lienzo.stroke();
//
////	//Dibujando una Raya
////	lienzo.moveTo(100,100);
////	lienzo.lineTo(200,100);
//	lienzo.strokeStyle = "#F00";
//	lienzo.stroke();
//
// Esta linea es para hacer un nuevo dobujo. beginPath
	lienzo.beginPath();
	lienzo.strokeStyle = "#00F";
//Crear un Arco. tiene varios parametros .arc();
//150,150 = es el primer parametro donde se inicia el dibujo.
//100 = es el segundo parametro que es el Radio del Circulo
//3.1416 = es el tercer parametro es el que indica cuantos Radianes va a tener el circulo. y vale Pi π
//false = es el cuarto parametro que indica si estoy trazando el direccion contraria a las manecillas del reloj.
	lienzo.arc(150,150, 100, (Math.PI * 2), false);
	lienzo.fillStyle = "#118877";
	lienzo.fill();
	lienzo.closePath();
	lienzo.stroke();
}

function dibujarGrilla (l)
{
	var l = lienzo;
	var rayas = Number(t.value);
	var ancho = 300, alto = 300;
	var linea, punto;
	var anchoLinea = ancho / rayas;
	var limiteX = ancho / anchoLinea;
	var limiteY = alto / anchoLinea;

		l.strokeStyle = "#AAA";

	for(linea = 0; linea <= limiteX; linea++)
	{
		punto = (linea * anchoLinea) + 0.5;
		l.beginPath();
		l.moveTo(punto, 0.5);
//		l.moveTo(punto+300, 0.5);
		l.lineTo(punto, ancho - 0.5);
		l.closePath();
		l.stroke();
	}


	for(linea = 0; linea <= limiteY; linea++)
	{
		punto = (linea * anchoLinea) + 0.5;
		l.beginPath();
		l.strokeStyle = "red";
		l.moveTo(0.5, punto);
		l.lineTo(alto - 0.5, punto);
//		l.lineTo(alto - 0.5, punto+300);
		l.closePath();
		l.stroke();
	}





	var img_palomita = new Image();
	// creamos un objeto del tipo imagen 
	//  Como todo objeto tiene propiedades métodos y eventos 

	img_palomita.src ="img/click.png";
	// con la propiedad src definimos la imagen a cargar. DEBE ESCRIBIRSE LA RUTA CORRECTA A LA IMAGEN 

	img_palomita.addEventListener('load', mostrar_imagen, false);
	// para poder mostrar la imagen, primero debe cargarse... 
	// la imagen tienen el evento load, que se produce cuando la imagen se ha descargado en el navegador 
	// el método EventListener permite verificar cuando la imagen se ha cargado 
	// cuando la imagen se ha cargado ejecutaremos la función mostrar_imagen, que mostrará la imágen en el canvas 
	// el método EventListener utiliza las variables (evento, función a ejecutar, indica si se desea iniciar el registro del evento) 


	function mostrar_imagen()
	// creamos la función  mostrar_imagen para mostrar la imagen en el canvas 
	// esta función se ejecuta cuando la imagen se ha cargado 
	{ 

		lienzo.drawImage(img_palomita, 80, 80);
		// aqui utilizamo el método drawimage para mostrar a nuestra imagen dentro del canvas 
		// el método drawimage utiliza las variables  (imagen a cargar, posición en x, posición en y) 
		// el método drawimage se puede usar indistintamente para cargar imágenes jpg, png o svg 
	}	


}