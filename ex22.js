// Exercise 22: More Complex OOP

// Previous Version
const Person = (name, age, eyes) => {
    let obj = {
        name: name,
        age: age,
        eyes: eyes
    }

    obj.talk = (words) => {
        console.log(`I am ${obj.name} and ${words}.`);
    }

    return obj;
}

let alex = Person("Alex", 16, "green");
let mary = Person("Mary", 44, "brown");
let frank = Person("Frank", 34, "blue");

frank.talk("I am talking here!");
mary.talk("these are some words");
alex.talk("Hi there!");

console.log(`Frank is ${frank.age}, Mary is ${mary.age}, Alex is ${alex.age}`);

// Updated Version
class Person {
  // Using "constructor" keyword to build the object  
  constructor (name, age, eyes) {
    // Using "this" keyword to self-reference the object
    this.name = name;
    this.age = age;
    this.eyes = eyes;
  }

  // Adding a talk function to the Person class
  talk(words) {
    console.log(`I am ${this.name} and ${words}.`);
  }
}

// use "new" to signify a new Person object
let alex = new Person("Alex", 16, "green");
let mary = new Person("Mary", 44, "brown");
let frank = new Person("Frank", 34, "blue");

frank.talk("I am talking here!");
mary.talk("these are some words");
alex.talk("Hi there!");

console.log(`Frank is ${frank.age}, Mary is ${mary.age}, Alex is ${alex.age}`);