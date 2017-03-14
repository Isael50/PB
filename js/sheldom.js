function aleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}
var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var opcionesUsuario;
var opcionesMaquina = aleatorio(0,4);

opcionesUsuario = prompt("¿Qué eliges?\n Piedra: 0\n Papel: 1\n Tijera: 2\n Lagarto: 3\n Spock: 4", 0);

alert("Elegiste: " + opciones[opcionesUsuario]);
alert("Javascript eligió: " +opciones[opcionesMaquina]);

if(opcionesUsuario == piedra)
{
	if(opcionesMaquina == piedra)
	{
		alert("Empate\nPiedra no destruye Piedra");
	}
	else if(opcionesMaquina == papel)
	{
		alert("Perdiste\nEl Papel te tapo la Piedra");
	}
	else if(opcionesMaquina == tijera)
	{
		alert("Ganaste\nLa Piedra destruye la Tijera");
	}
	else if(opcionesMaquina == lagarto)
	{
		alert("Ganaste\nLa Piedra aplasta al Lagarto");
	}
	else if(opcionesMaquina == spock)
	{
		alert("Perdiste\nTe evaporizo el Spock");
	}
}
else if(opcionesUsuario == papel)
{
	if(opcionesMaquina == piedra)
	{
		alert("Ganaste");
	}
	else if(opcionesMaquina == papel)
	{
		alert("Empate");
	}
	else if(opcionesMaquina == tijera)
	{
		alert("Perdiste");
	}
	else if(opcionesMaquina == lagarto)
	{
		alert("Perdiste");
	}
	else if(opcionesMaquina == spock)
	{
		alert("Ganaste");
	}
}
else if(opcionesUsuario == tijera)
{
	if(opcionesMaquina == piedra)
	{
		alert("Perdiste");
	}
	else if(opcionesMaquina == papel)
	{
		alert("Ganaste");
	}
	else if(opcionesMaquina == tijera)
	{
		alert("Empate");
	}
	else if(opcionesMaquina == lagarto)
	{
		alert("Ganaste");
	}
	else if(opcionesMaquina == spock)
	{
		alert("Perdiste");
	}
}
else if(opcionesUsuario == lagarto)
{
	if(opcionesMaquina == piedra)
	{
		alert("Perdiste");
	}
	else if(opcionesMaquina == papel)
	{
		alert("Ganaste");
	}
	else if(opcionesMaquina == tijera)
	{
		alert("Perdiste");
	}
	else if(opcionesMaquina == lagarto)
	{
		alert("Empate");
	}
	else if(opcionesMaquina == spock)
	{
		alert("Ganaste");
	}
}
else if(opcionesUsuario == spock)
{
	if(opcionesMaquina == piedra)
	{
		alert("Ganaste");
	}
	else if(opcionesMaquina == papel)
	{
		alert("Perdiste");
	}
	else if(opcionesMaquina == tijera)
	{
		alert("Ganaste");
	}
	else if(opcionesMaquina == lagarto)
	{
		alert("Perdiste");
	}
	else if(opcionesMaquina == spock)
	{
		alert("Empate");
	}
}
else
{
	alert("Error.\nIntenta otra vez...")
}