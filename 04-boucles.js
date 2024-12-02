// La boucle for

let tours = 10;
for(let i = 0; i < tours; i++) {
    console.log('Coucou');
}

// While

while(confirm('Continuer ?')) {
    console.log('Faites une pompe !')
}

let i = 10;
while(i > 0) {
    console.log(i);
    i--; // Il faut impérativement modifier la condition pour éviter la boucle infinie !
}

// Do While
let j = 20;
do {
    console.log(j);
    j++;
} while (j <= 10)