var palabra = "Madera";
//toUpperCase(): Converte a mayúscula un texto
//palabra = palabra.toUpperCase();
//toLowerCase(): Converte a minuscula un texto
//palabra = palabra.toLowerCase();

//Variables Globales
var hombre, l, espacio;

//Declaracion de la Clase Ahorcado
var Ahorcado = function (con)
{
	//this: Son las variables locales de la clase, accesibles en todla la clase.
	//this.contexto es el contexto de dibujo del canvas, que llega por parametro desde la variable con
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;

	this.dibujar();
}
Ahorcado.prototype.dibujar = function ()
{
	//Se crea la variable dibujo para no escribir todo el texto this.contexto
	var dibujo = this.contexto;
	//Para empezar a dibujar beginPath();
	//Dibujando el poste
	dibujo.beginPath();
	//moveTo: Es donde arranca mi linea
	dibujo.moveTo(400,150);
	dibujo.lineTo(400,100);
	dibujo.lineTo(150,100);
	dibujo.lineTo(150,350);
	//lineWidth: Es para establecer en pixeles el ancho de la linea
	dibujo.lineWidth = 15;
	//strokeStyle: Es el color de la linea
	dibujo.strokeStyle = "#000000";
	//stroke(): Es para dibujar todo el trazo completo.
	dibujo.stroke();
	//Termina de dibujar
	dibujo.closePath();

	dibujo.beginPath();
	dibujo.moveTo(50,350);
	dibujo.lineTo(250,350);
	dibujo.stroke();
	dibujo.closePath();

//	dibujo.beginPath();
//	dibujo.moveTo(150,100);
//	dibujo.lineTo(150,50);
//	dibujo.lineTo(400,50);
//	dibujo.lineTo(400,350);
//	dibujo.strokeStyle = "#0000";
//	dibujo.stroke();
//	dibujo.closePath();

	if(this.intentos > 0)
	{
		//intentos = 1 --> rostro
		dibujo.beginPath();
		dibujo.arc(400, 190, 40, 0, Math.PI * 2, false);
		dibujo.strokeStyle = "red";
		dibujo.lineWidth = 5;
		dibujo.stroke();
		dibujo.closePath();

		if(this.intentos > 1)
		{
			//intentos = 2 --> cuerpo
			dibujo.beginPath();
			dibujo.moveTo(400,230);
			dibujo.lineTo(400,320);
			dibujo.strokeStyle = "red";
			dibujo.lineWidth = 5;
			dibujo.stroke();
			dibujo.closePath();

			if(this.intentos > 2)
			{
				//intentos = 3 --> brazos
				//Brazo Derecho
				dibujo.beginPath();
				dibujo.moveTo(400,250);
				dibujo.lineTo(425,275);
				dibujo.stroke();
				dibujo.closePath();
				//Brazo Izquierdo
				dibujo.beginPath();
				dibujo.moveTo(400,250);
				dibujo.lineTo(375,275);
				dibujo.stroke();
				dibujo.closePath();

				if(this.intentos > 3)
				{
					//intentos = 4 --> piernas
					//Pierna Derecha
					dibujo.beginPath();
					dibujo.moveTo(400,320);
					dibujo.lineTo(425,355);
					dibujo.stroke();
					dibujo.closePath();
					//Pierna Izquierda
					dibujo.beginPath();
					dibujo.moveTo(400,320);
					dibujo.lineTo(375,355);
					dibujo.stroke();
					dibujo.closePath();

					if(this.intentos > 4)
					{
						//intentos = 5 --> Ojos muertos
						//Ojo Derecho
						dibujo.beginPath();
						dibujo.moveTo(425,175);
						dibujo.lineTo(405,195);
						dibujo.moveTo(405,175);
						dibujo.lineTo(425,195);
						dibujo.strokeStyle = "blue";
						dibujo.lineWidth = 2;
						dibujo.stroke();
						dibujo.closePath();
						//Ojo Izquierdo
						dibujo.beginPath();
						dibujo.moveTo(375,175);
						dibujo.lineTo(395,195);
						dibujo.moveTo(395,175);
						dibujo.lineTo(375,195);
						dibujo.strokeStyle = "blue";
						dibujo.stroke();
						dibujo.closePath();
						//Boca
						dibujo.beginPath();
						dibujo.moveTo(380,220);
						dibujo.lineTo(380,210);
						dibujo.lineTo(420,210);
						dibujo.lineTo(420,220);
						dibujo.strokeStyle = "blue";
						dibujo.stroke();
						dibujo.closePath();


					}
				}
			}
		}
	}
}
Ahorcado.prototype.trazar = function ()
{
	this.intentos++;
	if(this.intentos >= this.maximo)
	{
		this.vivo = false;
		alert("Estas muerto");
	}
	this.dibujar();
}
function iniciar()
{
	l = document.getElementById("letra");
	var b = document.getElementById("boton");
	var canvas = document.getElementById("c");
	canvas.width = 500;
	canvas.height = 400;
	var contexto = canvas.getContext("2d");
	hombre = new Ahorcado(contexto);
	//Convierte a mayúscula un texto
	palabra = palabra.toUpperCase();

	//Declaro un array con n espacios de acuerdo al largo de la palabra
	espacio = new Array(palabra.length);

	//Agregamos una función que se dispare el dar click al botón
	b.addEventListener("click", agregarLetra);

	mostrarPista(espacio);
}
function agregarLetra()
{
	var letra = l.value;
	l.value = "";
	l.focus();
	mostrarPalabra(palabra, hombre, letra);
}
function mostrarPalabra(palabra, ahorcado, letra)
{
	var encontrado = false;
	var p;
	letra = letra.toUpperCase();
	//Ciclo for( in ) de JavaScript
	//La p es una iteracion de cada unas de las letras que tiene la variable palabra.
	for(p in palabra)
	{
		if(letra == palabra[p])
		{
			espacio[p] = letra;
			encontrado = true;
		}
	}
	mostrarPista(espacio);

	//Si NO lo encontré
	if(!encontrado)
	{
		ahorcado.trazar();
	}

	if(!ahorcado.vivo)
	{
		//Mostrar la palabra entera
	}
}
function mostrarPista(espacio)
{
	var pista = document.getElementById("pista");
	var texto = "";
	var i;
	var largo = espacio.length;

	for(i = 0; i<largo; i++)
	{
		if(espacio[i] != undefined)
		{
			texto = texto + espacio[i] + " ";
		}
		else
		{
			texto += "_ ";
		}
	}
	pista.innerText = texto;
}