/*Ejercicio 2: Declara un arreglo vacío denominado nombres. 
Pide al usuario tres nombres y almacena esos nombres como elementos arreglo. 
A continuación muestra el contenido en un mensaje.

Pedir 1 nombre
Agregar al array.push
Pedir 2 nombre
Agregar al array.push
Pedir 3 nombre
Agregar al array.push
Dime los 3 nombres. */


	var miNombre = []
	for (i = 0 ; i <= 3 ; i++) {
		miNombre[i] = prompt(miNombre + " " + i)
			}
			for (i = 0 ; i <=3; i++){
				alert(miNombre[i])
			}
