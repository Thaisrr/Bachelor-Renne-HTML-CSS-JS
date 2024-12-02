// Variables globales : à la racine du fichier, et disponible partout dans le fichier.
// C'est ce qu'on appelle la portée d'une variable.

let toto = 'Hello World';
const titi = 123;
var tutu = true;

console.log(toto); // Affiche la valeur de toto dans la console

function maFunction() {
    // on fait des trucs
    let a = "a"; // Variable de block
    var b = 'b';
}

console.log(a); // Erreur la variable n'existe pas.
console.log(b); // Erreur

if(true) {
    let c = 'c';
    var d = 'd';
}

console.log(c); // Erreur
console.log(d); // OK

let e = 'Coucou';
e = 'Hello'; // Je réassigne la valeur de e
const PI = 3.14;
PI = 456; // Erreur on ne peut pas réassigner la valeur


