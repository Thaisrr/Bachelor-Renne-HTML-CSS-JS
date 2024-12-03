const fruits = ['peche', 'pomme', 'poire'];

console.log(fruits[0]); // affiche peche
console.log(fruits[1]); // affiche pomme
console.log(fruits[2]); // affiche poire

const tabVide = [];
console.log(tabVide[0]); // undefined
console.log(fruits[3]); // undefined

console.log(`J'ai ${fruits.length} éléments dans mon tableau`); // 3

fruits.push('fraise');

console.log(`J'ai ${fruits.length} éléments dans mon tableau`); // 4
console.table(fruits);

console.log(`Est-ce que j'ai des framboises dans mon tableau ? ${fruits.includes('framboise')}`); // false

fruits[0] = 'pêche'; // Modifie l'entrée

const indexFraise = fruits.indexOf('fraise'); // 3
const indexMure = fruits.indexOf('mure'); // -1

// supprimer d'un tableau
fruits.splice(indexFraise, 1); // Je supprime 1 élément à partir de l'indexFraise ( 3 ) -> supprime uniquement 'Fraise'

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for(let f of fruits) {
    f = f + "111"; // /!\ Je ne modifie pas le tableau !
    console.log(f); // Ici, on ne travaille plus avec des index, mais les valeurs des entrées du tableau
}

console.table(fruits);

fruits.forEach(function (value, index) {
    console.log(`A l'index ${index} j'ai ${value}`);
})

fruits.forEach((value, index) => {
    value = value + '222'; // ça ne modifie pas le tableau
    fruits[index] = value + '333'; // ça modifie le tableau
    console.log(`A l'index ${index} j'ai ${value}`);
})

console.table(fruits);

const numbers = [12, 10, 52, 30, 78, 1];

// Créer un nouveau tableau en modifiant les éléments d'un premier tableau.
// Exemple : créer un tableau depuis numbers en multipliant ses valeurs par 10

const by10 = numbers.map((value) => value * 10);
console.table(by10);

// Créer un tableau d'après un premier tableau, et dont les éléments répondent à une condition
// Exemple: créer un tableau depuis numbers dont les entrées sont inférieur à 20

const smallNumbers = numbers.filter((value) => value < 20);

// Trier un tableau en ASCII ( par ordre alphabétique )
numbers.sort();
console.table(numbers);

// Trier des nombres
numbers.sort((a, b) => a - b); // Croissant

numbers.sort((a, b) => b - a); // Décroissant

console.table(numbers);

numbers.reverse(); // Inverse l'ordre d'un tableau
console.table(numbers);

// Transformer un tableau en string en concaténant les éléments
const str = numbers.join(' < ');
console.log(str);

const newNumbers = str.split(' < '); // Retourne le même tableau que tout à l'heure

/*

 */