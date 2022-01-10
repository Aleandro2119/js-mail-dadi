//Gioco dei dadi

/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.*/


//1
const userNumber = Math.floor(Math.random() * 7);
console.log(userNumber);

//2
const userPc = Math.floor(Math.random() * 7);
console.log(userPc);

//3
if (userNumber < userPc) {

    console.log('Hai perso!!!')

} else if (userNumber > userPc) {

    console.log('Hai vinto!!!')

} else {

    console.log('Pareggio!!')

}