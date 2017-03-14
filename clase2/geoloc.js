function mostrar(pos)
{
	document.write(pos.coords.latitude + "," + pos.coords.longitude);
}
navigator.geolocation.getCurrentPosition( mostrar );