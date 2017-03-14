// Forma correcta de como escribir el codigo de objetos
//Metodo es igual a una Funcion metida dentro de un objeto.
//Atributo es igual a una Variable, cuando la variable es parte de un objeto
function Pokemon(n,v,a)
{
	this.grito = "Pika";
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function()
	{
		alert(this.grito)
	}
}

function inicio()
{
	var rattata = new Pokemon("Rattata", 40, 2);
	rattata.grito = "Grrr Grrr Grrrrr";
	var pikachu = new Pokemon("Pikachu", 100, 55);
	var bulbasaur = new Pokemon("Bulbasaur", 90, 50);
	bulbasaur.grito = "splash"

	var YooP = prompt("Elige un Pokemon:\nPikachu = 1\nRattata = 2\nBulbasaur = 3");

	if(YooP == 1)
	{
		nombrePokemon.innerText = pikachu.nombre;
		datosPokemon.innerText = "Su vida es de: " + pikachu.vida + ", con un ataque de: " + pikachu.ataque + ", y grita: " + pikachu.grito;
		document.write('<img src="pikachu.png" />');
	}
	else if(YooP == 2)
	{
		nombrePokemon.innerText = rattata.nombre;
		datosPokemon.innerText = "Su vida es de: " + rattata.vida + ", con un ataque de: " + rattata.ataque + ", y grita: " + rattata.grito;
		document.write('<img src="rattata.png" />');
	}
	else if(YooP == 3)
	{
		nombrePokemon.innerText = bulbasaur.nombre;
		datosPokemon.innerText = "Su vida es de: " + bulbasaur.vida + ", con un ataque de: " + bulbasaur.ataque + ", y grita: " + bulbasaur.grito;
		document.write('<img src="bulbasaur.png" />');
	}
}

//	nombrePokemon.innerText = YooP;
//	datosPokemon.innerText = "Su vida es de: " + rattata.vida + ", con un ataque de: " + rattata.ataque + ", y grita: " + rattata.grito;
//	document.write('<img src="pikachu.png" />')



////Objeto creados por mi.
//
////Variables de asignacion por Valor.
////Variables de asignacion por Referencia.
//
//function Pokemon(nombrePokemon, vidaPoke, ataPoke)
//{
//	var estructuraPokemon =
//	{
//		nombre: nombrePokemon,
//		vida: vidaPoke,
//		ataque: ataPoke
//	};
//	return estructuraPokemon;
//}
//
//var pikachu = Pokemon("Pikachu", 100, 55);
//var bulbasaur = Pokemon("Bulbasaur", 90, 50);
//
////document.write(pikachu.nombre);
//console.log(bulbasaur);