// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e
// a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const userNumber = [];
let sum = 0;

while (sum < 50) {
    // richiesta numeri
    let userQuestion = prompt('Inserisci un numero: ');
      // convalida dell'input come numero
    let numbers = parseFloat(userQuestion);
    // condizione
    if (!isNaN(numbers)) {
        userNumber.push(numbers);
        sum += numbers;
    } else {
        console.log('Hai inserito dei caratteri invalidi')
    }
}

console.log('I numeri inseriti sono: ', userNumber);
console.log('La somma dei numeri inseriti è uguale a ', sum);

