// Exercise 20: First Game

const readline = require('readline-sync');

const say = (prompt) => {
    console.log(prompt);
}

const die = (message) => {
    say(message);
    process.exit(1);
}

const deathCheck = (hp, message) => {
    hpDisplay(hp);
    if (hp <= 0) {
        die(message);
        process.exit(1);
    } else {
        return;
    }
}

const ask = (hp, prompt) => {
    hpDisplay(hp);
    if (hp <= 0) {
        die("You died!");   
    } else {
        return readline.question(prompt + ' ');
    }
}

const door = (hp) => {
    // They have to open the door to get the gold
    // What kind of puzzle will they solve?
}

const spider = (hp) => {
    // They enter here, and teh spider takes 10 hit points
    // If they live then they can run away
}

const gold = (hp) => {
    // End of the game they win if they get the gold
}

const rope = (hp) => {
    // They are climbing down
    say("As you climb down further another glint of light catches your eye at the bottom.");
    // Climb down normally or quickly
    let next = ask(hp, "Do you climb down normally or slide down?");

    if (next === "normal" || next === "normally") {
        say("In no rush, you make it to the bottom of the well and are greeted with ankle-deep water.");
    } else if (next === "slide") {
        hp = Math.floor(hp / 4);
        hpDisplay(hp);
        say("In your moment of greed, you loosen your grip a bit and slide quickly. In the process getting rope burn.");
    } else {
        hp = Math.floor(hp / 2);
        // console.log(hp);
        hpDisplay(hp);
        say("Your grip slips and you fall to the watery bottom!\nYou land on your back completely soaked and muddy."); 
    } 

    // They can go through the door to the gold
    // Or go take a wrong turn to the spider
}

const jumped = (hp) => {
    say("You're mad! Fueled by greed you leap in and land at the bottom.");
    // hp = Math.floor(hp / 2);
    hp = 0;
    deathCheck(hp, "Your avarice got the best of you and your lungs were punctured by a cracked rib... you die a slow death.");
    say("You break your right ankle in the process and you are soaking wet and muddy.");
}

const well  = (hp) => {
    say("You are walking through the woods and see a well.");
    say("Walking up to it and looking down you see a shiny thing at the bottom.");
    let next = ask(hp, "What do you do?");

    if(next === "climb") {
        say("You take ahold of the rope and begin to climb down.");
        rope(hp);
    } else if (next === "jump") {
        say("Yikes! Let's see if you survive!");
        jumped(hp);     
    } else {
        say("You can't do that here.");
        well(hp);
    }
}

// Setup the hit points
let hp = Math.floor(Math.random() * 10) + 1;
let hpDisplay = (hp) => {
    console.log(`[[You have ${hp} hit points.]]`);
};

// Starts the game
well(hp);