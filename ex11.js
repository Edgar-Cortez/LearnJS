// Exercise 11: Functions

const printPerson = (name, age) => {
    console.log(`Hi ${name}, you are ${age} years old.`);
}

printPerson('Edgar', 30);
printPerson('Briana', 24);
printPerson('Andrew', 17);
printPerson('Daniel', 10);

console.log('---------- pets ----------');

const printPet = (owner_name, owner_age, pet_name, pet_age) => {
    printPerson(owner_name, owner_age);
    
}

printPet('Edgar', 30, 'Aries', 3);
printPet('Briana', 24, 'Kali', 5);
printPet('Andrew', 17, 'Tiko', 7);
printPet('Daniel', 10, 'Huber', 11);


// This part is tough!  Brain melting! Give it a try
console.log('---------- callback style ----------');

const fancyPet = (owner_name, owner_age, pet_name, pet_age, cb) => {
    cb(owner_name, owner_age);
    console.log(`That person owns ${pet_name} who is ${pet_age} years old.`);
}

// Notice how I use a function here as the parameter cb?
// fancyPet('Edgar', 30, 'Aries', 3, (name, age) => {
//     console.log(`Ooooh fancy ${name} you are ${age} old.`);
// });

// The last parameter was essentially the printPerson function so I used 
// that function as a parameter
fancyPet('Edgar', 30, 'Aries', 3, printPerson);