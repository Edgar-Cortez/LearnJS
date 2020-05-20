// Exercise 21: Simple OOP

// We need a way to build objects automatically with the specified parameters
const Person = (name, age, eyes) => {
    // This makes an object for the data
    let obj = {
        name: name,
        age: age,
        eyes: eyes
    }

    // Then attach the talk function to the data objects (obj)
    obj.talk = (words) => {
        // Coolest part is obj here will keep a reference
        console.log(`I am ${obj.name} and ${words}.`);
    }

    // and return our new person
    return obj;
}

// Let's use that to make someone named alex
let alex = Person("Alex", 16, "green");
// And see how they can talk without repitition?
alex.talk("YO!");