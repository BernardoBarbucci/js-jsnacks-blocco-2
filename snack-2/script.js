// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi
//  e una lista di cognomi, e da questi due array 
// distinti vuole generare una falsa lista di invitati con nome e cognome.

const names = [
    'Gino',
    'Pino',
    'Marcellino',
    'Bernardino',
    'Riccardino',
];
const surnames = [
    'Bellini',
    'Bruttini',
    'Carini',
    '007',
    'Lilletto',
];

const randomFullNames = [];

while (names.length > 0 && surnames.length > 0) {
    let randomNameIndex = Math.floor(Math.random() * names.length);
    let randomSurnameIndex = Math.floor(Math.random() * surnames.length);

    let randomName = names[randomNameIndex];
    let randomSurname = surnames[randomSurnameIndex];

    let fullName = randomName + ' ' + randomSurname;

    randomFullNames.push(fullName);

    // Rimuovi il nome e il cognome utilizzati
    names.splice(randomNameIndex, 1);
    surnames.splice(randomSurnameIndex, 1);
}

console.log(randomFullNames);