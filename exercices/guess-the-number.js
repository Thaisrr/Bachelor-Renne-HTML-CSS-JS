
function startGame(random) {

    let userGuess;
    do {
        userGuess = +prompt('Entrez un nombre valide');
    } while (isNaN(userGuess));

    if(userGuess === random) {
        alert('Gagné !');
    } else if(userGuess < random) {
        alert('Trop bas !');

    } else {
        alert('Trop haut !');
    }

    if(userGuess !== random) {
        startGame(random);
    }

}

do {
    const random = Math.floor(Math.random() * 100 + 1);
    startGame(random);
} while (confirm('Rejouer ?'));
