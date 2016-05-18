// JavaScript Document
$(document).ready(function(e) {
	//watchlD se refier a actual
	
	var watchlD=null;
	document.addEventListener("deviceready",Dispositivo_Listo,false);
	
	//Cuando esta listo el dispositivo
	function Dispositivo_Listo(){
		comienza();
	}
	
	//Empieza la observacion de la aceleracion
	function Comienza(){
		
    //Actualiza la aceleracion cada 2 segundos
	//
	var opciones={frequency:2000};
	
    watchlD=navigator.accelerometer.watchAcceleration(Correcto, Error, opciones);
	navigator.geolocation.getCurrentPosition(Localiza, ErorLocalizacion);
	}
	//Detiene la observacion de la aceleracion
	
	function Detente(){
		if(watchlD) {
			navigator .accelerometer.clearWatch (watchlD);
			watchlD=null;
		}
	}
	//Correcto:Toma una captura de la aceleracion
	function Correcto(acceleration){
		var element=document.getElementById('acelerometro');
		
		element.innerHTML='Aceleracion en X:'+acceleration.x+'<br/>'+
		'Aceleracion en Y:'+acceleration.y+'<br/>'+
		'intervalo:'+acceleration.timestamp+'<br/>';
	}
	
	//eRROR:FALLA al obtener la aceleracion
	function Error(){
		alert('Error!');
	}
	//Exito al localizar
	function Localiza(posicion){
		var element=document.getElementById('geolocalizacion');
		element.innerHTML='Latitud:'+posicion.coords.latitude+'<br/>'+
		'Longitud:'+posicion.coords.longitude+'<br/>'+
		'Precision:'+posicion.coords.accuracy+'<br/>'+
		'intervalo:'+posicion.timestamp+'<br/>';
	}
	//Error en la geolocalizacion
	function ErrorLocalizacion(error){
	alert('codigo:'+error.code+'\n'+
	'mensaje:'+error.message+'\n');
	}
});//document ready

