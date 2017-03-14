var tablero, direccion, tisX, tisY;

//var tisX = tifis.x;
//var tisY = tifis.y;

var teclas =
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

var fondo = {
	imagenURL: "./img/fondo.png",
	imagenOK: false
};

var tifis = {
	x: 100,
	y: 100,
	frenteURL: "./img/diana-frente.png",
	frenteOK: false,
	atrasURL: "./img/diana-atras.png",
	atrasOK: false,
	izqURL: "./img/diana-izq.png",
	izqOK: false,
	derURL: "./img/diana-der.png",
	derOK: false,
	velocidad: 50
};

var liz = {
	x: 400,
	y: 200,
	lizURL: "./img/liz.png",
	lizOK: false,
};

function inicio ()
{
	var canvas = document.getElementById("campo");
	tablero = canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;

	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;

	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;

	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarDer;

	liz.lizy = new Image();
	liz.lizy.src = liz.lizURL;
	liz.lizy.onload = confirmarLiz;

//Para mover a Diana con el teclado
	document.addEventListener("keydown", teclado);
/* Para hacer que se mueva con el Boton
	var m = document.getElementById("mover");
	m.addEventListener("click", movimiento);
*/
}

////Funcion para saber los datos de las teclas (keyCode = Codigo Numerico Interno)
//function teclado(datos)
//{
//	console.log(datos);
//}

function teclado(datos)
{
	//Guardo en "codigo" el numero de la tecla oprimida
	var codigo = datos.keyCode;

	if(codigo == teclas.UP)
	{
		tifis.y -= tifis.velocidad;
// No se debe hacer por que cuando se esta trabajando desde un servidor los tiempos de respuestas son mas largos
//		tifis.frente.src = "./img/diana-atras.png";
	}
	if(codigo == teclas.DOWN)
	{
		if(tifis.y < 500)
		{
			tifis.y += tifis.velocidad;
		}
		// No se debe hacer por que cuando se esta trabajando desde un servidor los tiempos de respuestas son mas largos
//		tifis.frente.src = "./img/diana-frente.png";
	}
	if(codigo == teclas.LEFT)
	{
		tifis.x -= tifis.velocidad;
// No se debe hacer por que cuando se esta trabajando desde un servidor los tiempos de respuestas son mas largos
//		tifis.frente.src = "./img/diana-izq.png";
	}
	if(codigo == teclas.RIGHT)
	{
		tifis.x += tifis.velocidad;
// No se debe hacer por que cuando se esta trabajando desde un servidor los tiempos de respuestas son mas largos
//		tifis.frente.src = "./img/diana-der.png";
	}

		direccion = codigo;

	if(tifis.x >= 0 && tifis.x <= 450 && tifis.y >= 0 && tifis.y <= 450)
	{
		dibujar();
		valoresY.innerText = "";
	}
	else if(tifis.x < 0 && tifis.x <= 450 && tifis.y > 0 && tifis.y <= 450)
	{
		tifis.x = tisX;
		tifis.y = tisY;
		valoresY.innerText = "----- Valores fuera de rango -----";
	}
}
function confirmarFondo()
{
	fondo.imagenOK = true;
	dibujar();
}
function confirmarFrente()
{
	tifis.frenteOK = true;
	dibujar();
}
function confirmarAtras()
{
	tifis.atrasOK = true;
	dibujar();
}
function confirmarIzq()
{
	tifis.izqOK = true;
	dibujar();
}
function confirmarDer()
{
	tifis.derOK = true;
	dibujar();
}
function confirmarLiz()
{
	liz.lizOK = true;
	dibujar();
}
function dibujar()
{
	//Capa 1: Fondo
	if(fondo.imagenOK == true)
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	}
	//Capa 2: Tifis
	var tifiDibujo = tifis.frente;
	if(tifis.frenteOK && tifis.atrasOK && tifis.izqOK && tifis.derOK)
	{
		if(direccion == teclas.UP)
		{
			tifiDibujo = tifis.atras;
		}
		if(direccion == teclas.DOWN)
		{
			tifiDibujo = tifis.frente;
		}
		if(direccion == teclas.LEFT)
		{
			tifiDibujo = tifis.izq;
		}
		if(direccion == teclas.RIGHT)
		{
			tifiDibujo = tifis.der;
		}
		tablero.drawImage(tifiDibujo, tifis.x, tifis.y);
		valoresX.innerText = "Eje X: " + tifis.x + " Eje Y: " + tifis.y;
		tisX = tifis.x;
		tisY = tifis.y;

		dibujarGrilla();

	}
	//Capa 3: Liz
	// Como LizOK es Booleana (verdadera o falsa) no necesito comparar
	if(liz.lizOK)
	{
		tablero.drawImage(liz.lizy, liz.x, liz.y);
	}
}
/* Para hacer que se mueva con el Boton
function movimiento()
{

	tifis.x += 10;
	dibujar();
}*/




function dibujarGrilla (l)
{
//	alert("Dibujar Grilla");

	var l = tablero;
	var rayas = Number(10);
	var ancho = 500, alto = 500;
	var linea, punto;
	var anchoLinea = ancho / rayas;
	var limiteX = ancho / anchoLinea;
	var limiteY = alto / anchoLinea;

//		l.strokeStyle = "#AAA";

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
}