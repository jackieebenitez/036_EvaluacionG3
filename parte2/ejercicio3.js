palabra = prompt("dame palabra")
function palindromo(palabra){
	var frase = frase.replace(/\s/g, " ");
	for (var i = 0; i <= frase.length; i++){
	var x = frase[i].toLowerCase();
	var y = frase[frase.length-(i+1)].toLowerCase();
	if(x !== y){
	return = false;
	}
	return = true;
}
}