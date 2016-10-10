/* Ejercicio 1:Haz el juego de piedra papel o tijera con 3 turnos

Posibles resultados
piedra - papel o papel - piedra (gana papel)
piedra - tijera o  (gana piedra)
piedra - piedra (iguales)
papel - papel (iguales)
tijera - tijera (iguales)
papel - tijera ó tijera - papel (gana tijera)*/

/*Piedra, papel o tijera.
¡Vamos a jugar!
J1, dame tu primer tirada
J2, dame tu primer tirada
Si j1 tira piedra y j2 tira papel o j1 tira papel y j2 tira piedra
gana - papel
Si j1 tira piedra y j2 tira tijera o j1 tira tijera y j2 tira piedra 
j2 gana - piedra
Si j1 j2 o j3 tiran el mismo elemento
son iguales*/

/*var piedra
var papel
var tijera

jugador1 = prompt("Jugador 1 - vamos a jugar piedra papel o tijera")
jugador2 = prompt("Jugador 2 - vamos a jugar piedra papel o tijera")
for (var i = 3; i<=3; i++) {
	if ((jugador1 === piedra) && (jugador2 === papel)) || ((jugador1 === papel) && (jugador2 === piedra)){
		console.log("gana papel, siguiente jugada")
	} else if ((jugador1 === piedra) && (jugador2 === tijera)) || ((jugador1 === tijera) && (jugador2 === piedra)){
		console.log("gana piedra")
	} else if ((jugador1 === papel) && (jugador2 === tijera)) || ((jugador1 === tijera) && (jugador2 === papel)){
		console.log("gana tijera")
	} else ((jugador1 === piedra) && (jugador2 === piedra)) || ((jugador1 === papel) && (jugador2 === papel)) || ((jugador1 === tijera) && (jugador2 === tijera)){
		console.log("iguales")
	}
}*/



/*var piedra
var papel 
var tijera
jugador1 = tijera;

for (var i=3 ; i <= 3 ; i++){
	if (jugador1 == piedra){
		alert("Piedra gana contra tijera y pierde contra papel")
	} else if (jugador1 == papel) {
		alert("Papel gana contra piedra y pierde contra tijeras")
	} else if (jugador1 == tijera) {
		alert("Tijera gana contra papel y pierde contra roca")
	}
}*/


var papel;
var piedra;
var tijera;

for (var i=3; i<=3; i++) {
	jugador1 = prompt("piedra papel tijera (minusculas)")
	jugador2 = prompt("piedra papel tijera (minusculas)")
	if ((jugador1 === piedra) && (jugador2 === papel)) {
		alert("gana" + papel) 
	} else if  ((jugador1 === papel) && (jugador2 === piedra)) {
		alert("gana" + papel) 
	} else if  ((jugador1 === piedra) && (jugador2 === tijera)) {
		alert("gana" + piedra)
	} else if  ((jugador1 === papel) && (jugador2 === tijera)) {
		alert("gana" + tijera)
	} else if ((jugador1 === tijera) && (jugador2 === papel)) {
		alert("gana" + tijera)
	} else if ((jugador1 === piedra) && (jugador2 === piedra)){
		alert("iguales")
	} else if ((jugador1 === papel) && (jugador2 === papel)){
		alert("iguales")
	} else if ((jugador1 === tijera) && (jugador2 === tijera)){
		alert("iguales")
	}
}
