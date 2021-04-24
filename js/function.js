
var array = []
var obj = {}

// nombre
// argumentos
// bloque de codigo
// resultado


// Ejecutar

//Crear
var calculadora = { 
    resultado : 0,
    
    sumar (a=0, b=0){ 
    this.resultado += a + b
    

},
    restar (a=0, b=0) { 
    this.resultado -= a - b
    
},

obtenerResultado() { 
    return this.resultado
}
} 

calculadora.sumar(234, 567)

console.log (calculadora.obtenerResultado)

function nombreCompleto(primerNombre, segundoNombre, apellido) 

{
    var resultado = ''
    resultado = primerNombre
    
    if (segundoNombre != '') { resultado = resultado + ' ' + segundoNombre  } 
    resultado = resultado + ' ' + apellido  
    
    return resultado
} 

var dato = primerNombre + ' ' + segundoNombre + ' ' + apellido
    console.log(dato)
                               
//ejecutar
var resultadoSuma = calculadora.sumar (6,8)

//calculador.sumar()

var profesor = nombreCompleto('Alejandro', 'Ezequiel' , 'Villafañe')
var usuario = nombreCompleto('Cosme', 'Fulanito')

//Clase 9
// 1 base de datos/ muchos datos (solo datos) JSON

//1 app/funciones

var users = []  

fetch ('http://jsonplaceholder.typicode.com/users')
.then(function(x){
    return x.json ()
})
. then(function (json) {
    console.log (json)})


for (var i=0; i<users.length; i++) {users[i] = {...user[i], ...user}

var user = {
   
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }
}
