function sayHello() {
    console.log('Hello World')
}

sayHello();
sayHello();

function sum(a, b) {
    return a + b;
}

const result1 = sum(1, 1);
sum(365, 7894);

console.log(result1);

const result2 = sum(result1, 5);
console.log(result2);


// Fonction anonyme :
const soustraction =  function (a, b) {
    return a - b;
}

const result3 = soustraction(50, 5);
console.log(result3);


// Fonction fléchée
const division = (a, b) => {
    return a / b;
}

const result4 = division(50, 5);
console.log(result4);

const division2 = (a, b) => a / b; // le retour est implicite


// Opérateur mathématiques :
// + - / * %

let a = 50 + 5; // 55
a = a + 1;
a++; // Incrémentation
++a;

a = a - 1;
a--;
--a;

let b = 1;
console.log(b++); // 1
console.log(b); // 2
console.log(++b); // 3

a = a + 2;
a += 2;
a *= 2;
a /= 2;
a %= 2;

const str = "Hello World ! un mot entre \"guillemets \" " + "autre chaine de caractères";
const str2 = 'Hello World "guillemets" c\'est ';
const str3 = `Hello World "" c'est`;

const str4 = "valeur de a = " + a + " ! 1 + 1 = " + 1 + 1;
const str5 = `Valeur de a ${a} ! 1 + 1 = ${1 + 1}`;

console.log(str4)
console.log(str5)