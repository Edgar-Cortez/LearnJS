// Exercise 23: Inheritance

// Code Reuse
// In this example I don't need to worry about writing a new play 
// function for the Telecaster class because I am extending Guitar
// and Guitar already has one. I just write what's different about
// the Telecaster, which is it has volume and tone knobs.
class Guitar {
    constructor (color, name, wood) {
        this.color = color;
        this.name = name;
        this.wood = wood;
    }

    play(note) {
        console.log(`${this.name}:${this.color}:${this.wood} plays ${note}`);
    }
}

class Telecaster extends Guitar {
    volume(level) {
        // code for volume
    }

    tone(level) {
        // code for tone
    }
}

class Jazzmaster extends Guitar {
    constructor (color, name, wood) {
        // super keyword will call the constructor of Guitar to access it's properties
        super(color, name, wood);
        this.volume = 0;
        this.tone = 0;
    }
    
    volume(level) {
        this.volume = level;
    }

    tone(level) {
        this.tone = level;
    }
}

class BassVI extends Jazzmaster {
    play(note) {
        console.log(`${note}`);
    }
}

class Person {
    constructor (name, age, eyes) {
        this.name = name;
        this.age = age;
        this.eyes = eyes;
    }

    talk(words) {
        console.log(`I am ${this.name} and ${words}.`);
    }
}

// Interoperability
// This class takes an instrument and plays it using the notes
// in a sheet of music. As long as your class inherits from Guitar
// and has the play function then this code will work. Extending a
// class lets you use it with other classes which is called "interoperability".
class Musician extends Person {
    play(instrument, sheet_music) {
        for(let note of sheet_music) {
            instrument.play(note);
        }
    }
}


let babbington = new Musician("Roy Babbington", 78, "purple");
let harris = new Musician("Jet Harris", 71);
let edgar = new Musician("Edgar Cortez", 30);
let taliesin = new BassVI("red", "Taliesin");
let golden = new BassVI("gold", "Golden Arm");
let dino = new Jazzmaster("red", "Red", "cherry");

babbington.play(taliesin, ['a', 'b', 'c', 'd']);
harris.play(golden, ['e', 'd', 'g', 'a', 'r']);
edgar.play(dino, ['w', 'x', 'y', 'z']);