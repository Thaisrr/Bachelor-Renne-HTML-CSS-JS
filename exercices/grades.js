function getGrades() {
    let grades = [];
    for(let i = 0; i < 10; i++) {
        const newGrade = +prompt(`Entrez la note ${i + 1}`);
        if(newGrade < 0 || newGrade > 20 || isNaN(newGrade)) {
            alert('Veuillez entrer un nombre valide');
            i--;
            continue;
        }
        grades.push(newGrade);
    }
    return grades;
}

function getMinGrade(grades) {
    grades.sort((a, b) => a - b);
    return grades[0];
    // Math.min(grades);
}

function getMaxGrade(grades) {
    grades.sort((a, b) => b - a);
    return grades[0];
    // Math.max(grades);
}

function getAverage(grades) {
    let sum = 0;
    for(let g of grades) {
        sum += g;
    }
    return sum / grades.length;
}

function getAverageBis(grades) {
    const sum = grades.reduce((previous, next) => previous + next, 0);
    return sum / grades.length;
}

let grades = getGrades();
alert(`Vous avez entré les notes ${grades.join(', ')}`);
alert(`La note la plus basse est ${getMinGrade(grades)}`);
alert(`La note la plus haute est ${getMaxGrade(grades)}`);
alert(`La moyenne est ${getAverage(grades)}`);