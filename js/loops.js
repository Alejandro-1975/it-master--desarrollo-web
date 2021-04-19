// array. arreglo, matriz, vector, lista
// 0 = A
// 1 = l
// 2 = e

var nombre = "Alejandro"

var nombre = [
    "Alejandro",
    "Ezeguiel",
    "Villafañe",
]
console.log (nombre[0])
var mixto = [
    "soy un sting",
    123,
    true,
    null,
    []

]
mixto.push("nuevo dato")



// Interacciones
// Desde - 0 // hasta - 9// salto - 1
for (var i= 0; i < mixto.length; i++) {
    console.log(mixto[i])}

//Primer interaccion variable i = 0 SI - el codigo se ejecuta
//Segunda interaccion variable i = 1 SI - el codigo se ejecuta
//decima interaccion variable i = 9 NO - el codigo no se ejecuta

//objeto : array asociativo
var usuario = {
    primerNombre : 'Alejandro',
    segundoNombre : 'Ezequiel',
    apellido : 'Villafañe',
    altura : 1.78,
    esExtranjero : false,

}
 
var links = '<a href="#home">...</a>'

var linksContainer = document.querySelector('.second-nav-links')

var links = [
    {
        href : '#home',
        name : 'Home',
    },
    {
        href : '#productos',
        name : 'Productos',
    },  
    {     
        href : '#nosotros',
        name : 'Nosotros',
    },

    {        
        href : '#contacto',
        name : 'Contacto',
    },
           
   ]

for (var i = 0; i < links.length; i++) {
    linksContainer.innerHTML += '<a href="' + links[i].href + '">' + links[i].name + '</a>'
}

    
var itemsContainer = document.querySelector('#items')


var items = [
    {
        foto : 'http://placeimg.com/300/300/people',
        textoPrin : 'Product category one',
        textoSec : 'la mejor seleccion de productos',
    },
    {
        foto : 'http://placeimg.com/300/300/people',
        textoPrin : 'Product category one',
        textoSec : 'La mejor seleccion de productos',
    }]
    
for (var i = 0 ; i <items.length; i++) { console.log(items)
    var html = ''    
        html += '<div class="item-product">'
        html += '<img src="' + items[i].foto + '" alt="logo Google">'
        html += '<p><span class="negrita">' + items[i].textoPrin + '</span></p>'
        html += '<p>' + items[i].textoSec + '</p>'
        html += '</div>'
        itemsContainer.innerHTML += html
    }
    