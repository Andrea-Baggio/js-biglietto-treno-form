// const journeyLenght = parseFloat(prompt('Quanti chilometri?'));
// const passengerAge = parseInt(prompt('Quanti anni hai?'));

const price = 0.21 * journeyLenght;
let discount = 0;

if (passengerAge < 18) {
	discount = 20;
} else if (passengerAge >= 65) {
	discount = 40;
}

let finalPrice = price - price * discount / 100;
finalPrice = parseFloat(finalPrice);

document.getElementById('ticketPrice').innerHTML = finalPrice.toFixed(2) + '€';
