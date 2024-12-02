const bool = 20 > 10;
console.log(bool); // true

const bool2 = 20 > 10 && 10 === 5; // false
const bool3 = 20 > 10 || 10 === 5; // true
const bool4 = !bool3; // false

// Block conditionnel

if(bool4) {
    // on fait quelque chose si la condition passée est vraie
    // Une condition écrite avec les opérateurs et ou une variable booléene
} else {
    // On fait quelque chose si la condition est fausse
}

const day = 'Lundi';

if(day === 'Lundi') {
    console.log('Oh no !'); // On peut faire des opérations plus complexes, appeler des fonctions
} else if(day === 'Samedi' || day === 'Dimanche') {
    console.log('Week End !')
} else if(day === 'Vendredi') {
    console.log('Bientôt le week end')
} else {
    console.log('Un jour comme un autre')
}


let status = 'preparation';

switch (status) {
    case "preparation":
        console.log('Votre commande est en préparation');
        break;
    case "livraison":
        console.log('Votre commande est en cours de livraison');
        break;
    case "livrée":
        console.log('Votre commande est livrée');
        break;
    default:
        console.log(`Il se passe quelque chose de chelou avec votre commande`);
}


console.log("1" == 1); // TRUE
console.log("1" === 1); // FALSE

// Les pop up JS
alert('Hello World');
const name = prompt('Entrez votre nom'); // Retourne une string
console.log(name);
const isConfirmed = confirm('Voulez vous confirmer ? '); // Retourne un boolean


let age = prompt('Quel est votre age ?');
// Si age > 18, isMajeur est true, sinon, isMajeur est false
let isMajeur;
console.log(+age);
// Attention, si l'utilisateur•trice ne rentre pas un nombre, la conversion retournera NaN
// Not A Number
// On peut vérifier si un nombre est NaN avec la fonction isNaN()

if(isNaN(+age)) {
    age = prompt('Entrez un age valide svp')
}

// +age => converti age en number


if( +age > 18) {
    isMajeur = true;
} else {
    isMajeur = false;
}

isMajeur =Number(age) > 18; // Idem, Number(age) converti age en number


let legalStatus; // 'majeur' | 'mineur'

if(isMajeur) {
    legalStatus = 'majeur';
} else {
    legalStatus = 'mineur';
}

// Ternaire
// Passer une valeur ou une autre en fonction d'une condition
// WTF
//  What (condition ) ? True (valeur si true ): False (valeur si false )
legalStatus = isMajeur ? 'majeur' : 'mineur';

console.log(legalStatus);

let age1 = 0;

if(age1) {
    console.log(`Vous avez ${age} ans !`);
} else  {
    console.log(`Votre age n'est pas valide`)
}

let xyz;

if(!xyz) {
    console.log('Attention, la variable xyz n\'est pas définie ou à 0 !')
}


