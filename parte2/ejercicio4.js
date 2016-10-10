function persona(nombre​, ​edad​, genero){
	this.nombre = nombre
	this.edad = edad
	this.genero = genero
	obtDetalles = function(){
		alert("Nombre" + this.nombre + this.edad + this.genero)
	}
}


function estudiante((persona)curso, grupo){
	this.curso = curso
	this.grupo = grupo
	registar = function(){
		alert(persona + this.grupo + this.curso)
	}
}

function profesor ((persona,estudiante)asignatura, nivel){
	this.asignatura = asignatura
	this.nivel = nivel
	asignar = function (){
	}
}

