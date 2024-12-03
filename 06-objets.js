const humain = {
    size: 170,
    color: 'brown',
    age: 24,
    isMajeur: true
}

console.log(humain.size);

const user = {
    email: 'jeanmichel@mail.fr',
    password: 'toto00',
    name: 'Jean Michel',
}

alert(`Votre user est ${user.name}, son email est ${user.email}`);

const users = [
    user,
    {email: 'jeanmicheline@mail.fr', name: 'Jean Micheline', password: 'toto11'},
    {email: 'janedoe@mail.fr', name: 'Jane Doe', password: 'toto11'},
];

// Afficher les emails de chacun de mes users :
for(let u of users) {
    console.log(u.email);
}


class Computer {
    screen;
    peripherics;
    carteGraphique;

    constructor(p_carteGraphique, p_peripherics) {
        this.carteGraphique = p_carteGraphique;
        this.screen = 'Dell machin chose';
        this.peripherics = p_peripherics;
    }

    bipbip() {
        console.log('Bip Bip');
    }



}

const pc1 = new Computer('Nvidia super puissante', ['souris', 'disque dur externe ssd']);
console.log(pc1.carteGraphique);
for(let periph of pc1.peripherics) {
    console.log(periph)
}

pc1.bipbip();

class MyMath {
    static sum(a, b) {
        return a + b;
    }
}

MyMath.sum(2, 2);






