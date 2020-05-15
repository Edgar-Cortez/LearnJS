// Exercise 04: Variables
// let is the best way to make a variable
let name = 'Edgar A. Cortez-Castellano';
let age = 30;
let height = 73;

let feet = Math.round(height / 12);
let inches = height - (feet * 12);

// You can use a variable as a parameter
console.log('Name: ', name);
console.log('Age: ', age);

// You can also embed variables in strings with ``
console.log(`Height: ${feet} feet ${inches} inches.`);

console.log('Age * Height: ', age * height);
// You can also put math in the ${} boundaries
console.log(`Age * Feet: ${age * feet}`);