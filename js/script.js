// const journeyLenght = parseFloat(prompt('Quanti chilometri vuoi percorrerre?'));

// const passengerAge = parseInt(prompt('Quanti anni hai?'));

const price = parseFloat(journeyLenght * 0.21);
// console.log('Il tuo biglietto viene', price.toFixed(2),'£');

if (passengerAge < 18) {
    const discount = parseFloat(20 * price / 100);
    const finalPrice = price - discount;
    // console.log('I minorenni hanno diritto ad uno sconto del 20%, quindi il tuo biglietto viene', finalPrice.toFixed(2), '£');
} else if (passengerAge >= 65) {
    const discount = parseFloat(40 * price / 100);
    const finalPrice = price - discount;
    // console.log('Gli over 65 hanno diritto ad uno sconto del 40%, quindi il tuo biglietto viene', finalPrice.toFixed(2), '£');
} 