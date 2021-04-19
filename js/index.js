// DATOS
// Variables y/o Constantes
//Tipo de dato y dato

//Tipo de dato = Undefined
var nombre

// Tipo de dato es string (cadena de caracteres)
var primerNombre ="Alejandro"
var segundoNombre = "Ezequiel"
var apellido = "Villafañe"

//Concatenar
var nombreCompleto = primerNombre + " " + segundoNombre +" "+ apellido
console.log (nombreCompleto)
var cantidadDeLetras = nombreCompleto.length

console.log (cantidadDeLetras)
//Tipo de dato es number
var edad = 34
var altura = 1.78

// Tipo de boolean
var esExtranjero = false
var esMayorDeEdad = edad > 17

//Logica / Condicionales
if ( esExtranjero == true ) {
    console.log ("Bienvenido a nuestro país")
} else {
    console.log("Hola compatriota")
}
if (esMayorDeEdad) {console.log("Puedes acceder al sitio")
} else {
    console.log("te redirigiremos a otra pagina...")
}

// Eventos
var cartelCookie = document.querySelector(".cookie")
var aceptar = document.querySelector(".cookie a")
var mostrarMensaje = false

if (mostrarMensaje) {
    cartelCookie.style.display = "none"  
}
aceptar. addEventListener("click", function () {
    cartelCookie.style.display = "none"
})
// Envio de email
var botonDeEnviar = document.querySelector('#footer form button')

botonDeEnviar.addEventListener('click', function() {
    botonDeEnviar.parentElement.remove()
 
    let parrafo = document.createElement('p')
    parrafo.innerHTML = "Hemos recibido la suscripcion"
   
    document.querySelector('#footer').appendChild(parrafo)
})
// 
console.log(botonDeEnviar)